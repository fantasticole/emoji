import React from 'react';

const Modal = ({ handleClose, children, title }) => (
  <div className="overlay">
    <div className="modal">
      <button className="close" onClick={handleClose}>✕</button>
      <div className="body">
        <h2 className="title">{title}</h2>
        {children}
      </div>
    </div>
  </div>
);

export default Modal;
