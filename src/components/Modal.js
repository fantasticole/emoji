import React from 'react';

const Modal = ({ handleClose, children }) => (
  <div className="modal-fill">
    <div className="modal">
      {children}
      <button onClick={handleClose}>close</button>
    </div>
  </div>
);

export default Modal;
