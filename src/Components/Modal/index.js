import './styles.scss';

function Modal({show, children}) {
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