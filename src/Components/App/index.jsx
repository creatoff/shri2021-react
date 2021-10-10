import React, { useState } from 'react';
import {
  Switch, Route, useHistory, withRouter,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveSettings } from '../../store/actions';

import './styles.scss';
import Layout from '../Layout';
import SettingsDummy from '../SettingsDummy';
import Settings from '../Settings';
import Modal from '../Modal';
import NewBuild from '../NewBuild';
import History from '../History';

function App() {
  const settings = useSelector((state) => state?.settings);

  const dispatch = useDispatch();
  const handleSaveSettings = (values) => dispatch(saveSettings(values));

  const [isModal, toggleModal] = useState(false);

  const history = useHistory();

  return (
    <div className="App">
      <Layout title={settings?.repository} handleRunBuild={() => toggleModal(true)}>
        <Switch>
          <Route exact path="/settings">
            <Settings
              settings={settings}
              handleSubmit={handleSaveSettings}
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
