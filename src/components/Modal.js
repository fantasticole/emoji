import React from 'react';

const Modal = ({ handleClose, children }) => (
  <div className="modal-fill">
    <div className="modal">
      {children}
      <button className="close" onClick={handleClose}>✕</button>
    </div>
  </div>
);

export default Modal;
