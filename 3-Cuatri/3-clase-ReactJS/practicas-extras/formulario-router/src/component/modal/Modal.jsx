import './modal.css';
import React from "react";
import ReactModal from "react-modal";

const Modal = ({ isOpen, onRequestClose, contentLabel }) => {
  const handleEliminar = () => {
    alert("Falta la función de borrar 😅");
    onRequestClose();
    return;
  };

  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel={contentLabel}
        overlayClassName="customOverlay"
        className="customModal"
      >
        <h2>¿Estás seguro que querés eliminar esta película?</h2>
        <button onClick={handleEliminar}>Sí, eliminar</button>
        <button onClick={onRequestClose}>Cancelar</button>
      </ReactModal>
    </div>
  );
};

export default Modal;
