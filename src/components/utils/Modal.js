import React from 'react';
import ReactDOM from 'react-dom';
// import Login from '../Login';
// import Signup from '../Signup';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">
      {/* <Login />
      <Signup /> */}
      {children}
    </div>,
    document.getElementById('portal')
  );
}

export default Modal;
