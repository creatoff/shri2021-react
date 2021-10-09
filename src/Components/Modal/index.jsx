import React from 'react';
import './styles.scss';

// eslint-disable-next-line react/prop-types
function Modal({ show, children }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal__dialog">
        {children}
      </div>
    </div>
  );
}

export default Modal;
