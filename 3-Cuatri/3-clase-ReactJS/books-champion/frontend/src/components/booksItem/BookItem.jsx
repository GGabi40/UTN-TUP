import React from "react";
import { useState } from "react";

// Componentes de bootstrap-react -> https://react-bootstrap.netlify.app/docs/components/cards
// hay que instalar: npm install react-bootstrap
import { Card, Button } from "react-bootstrap";
import ModalDelete from "../modal/ModalDelete";

function BookItem({ bookTitle, author, rating, pageCount, imageUrl, summary }) {
  const [title, setTitle] = useState(bookTitle);
  const [show, setShow] = useState(false);

  const handleTitle = () => {
    setTitle("Titulo actualizado!");
  };

  const handleClose = () => {
    setShow(!show);
  };

  return (
    <>
      <ModalDelete show={show} handleClose={handleClose} />
      
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex">
        <Card className="cards shadow-sm w-100">
          <Card.Img
            height={400}
            variant="top"
            className="object-fit-cover"
            src={imageUrl || "https://bit.ly/47NylZk"}
          />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title className="text-truncate">{title}</Card.Title>
            <Card.Subtitle>{author}</Card.Subtitle>
            <div>{rating} Estrellas</div>
            <p>{pageCount} páginas</p>
            <p>{summary}</p>

            {/* Button -> Componente de bootstrap, onclick llama a la función handleTitle */}
            <Button onClick={handleTitle}>Actualizar Título</Button>
            <Button onClick={handleClose}>Eliminar Título</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default BookItem;
