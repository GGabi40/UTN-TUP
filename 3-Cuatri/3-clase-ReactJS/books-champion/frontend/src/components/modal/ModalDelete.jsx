import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalDelete({ handleClose, show }) {
  return (
    <Modal show={show} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>¿Estás segura/o?</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Se eliminará para siempre. ¿Deseás continuar?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="danger">
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDelete;
