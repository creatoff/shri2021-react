import React, { useState } from 'react';
import {
  Switch, Route, useHistory, withRouter,
} from 'react-router-dom';

import './styles.scss';
import Layout from '../Layout';
import SettingsDummy from '../SettingsDummy';
import Settings from '../Settings';
import Modal from '../Modal';
import NewBuild from '../NewBuild';
import History from '../History';

function App() {
  // const getSettings = () => ({
  //   repository: '',
  //   build_command: 'npm ci && npm run build',
  //   main_branch: 'master',
  // });

  const [settings, setSettings] = useState(null);
  const [isModal, toggleModal] = useState(false);

  const history = useHistory();

  return (
    <div className="App">
      <Layout title={settings?.repository} handleRunBuild={() => toggleModal(true)}>
        <Switch>
          <Route exact path="/settings">
            <Settings
              state={settings}
              handleSubmit={setSettings}
              afterSubmit={() => history.push('/')}
            />
          </Route>
          <Route exact path="/">
            {settings ? <History /> : <SettingsDummy />}
          </Route>
        </Switch>
      </Layout>
      <Modal show={isModal}>
        <NewBuild
          handleSubmit={({ hash }) => console.log(hash)}
          afterSubmit={() => toggleModal(false)}
          handleCancel={() => toggleModal(false)}
        />
      </Modal>
    </div>
  );
}

export default withRouter(App);
