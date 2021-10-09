import React from 'react';
import './styles.scss';

// eslint-disable-next-line react/prop-types
function Wrapper({ children }) {
  return (<div className="wrapper">{children}</div>);
}

export default Wrapper;
