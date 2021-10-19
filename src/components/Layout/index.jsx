import React from 'react';
import Wrapper from '../Wrapper';
import Header from '../Header';
import Footer from '../Footer';
import './styles.scss';

// eslint-disable-next-line react/prop-types
function Layout({ title, children, handleRunBuild }) {
  return (
    <div className="layout">
      <div className="layout__header">
        <Header title={title} wrapper={Wrapper} handleRunBuild={handleRunBuild} />
      </div>
      <div className="layout__content">
        <Wrapper>{children}</Wrapper>
      </div>
      <div className="layout__footer">
        <Footer wrapper={Wrapper} />
      </div>
    </div>
  );
}

export default Layout;
