import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="children">{children}</div>
    </div>,
    document.getElementById('portal')
  );
}

export default Modal;
