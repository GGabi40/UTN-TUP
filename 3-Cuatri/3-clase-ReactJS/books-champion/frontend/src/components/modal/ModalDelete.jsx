import React from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalDelete({ handleClose }) {
  return (
    <>
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
        >
        <Modal.Dialog>
            <Modal.Header closeButton>
            <Modal.Title>¿Estás seguro?</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <p>Se eliminará para siempre siempre</p>
            </Modal.Body>

            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
            <Button variant="primary">Eliminar</Button>
            </Modal.Footer>
        </Modal.Dialog>
        </div>
    </>
  );
}

export default ModalDelete