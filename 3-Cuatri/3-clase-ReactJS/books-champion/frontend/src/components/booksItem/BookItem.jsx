import React from 'react'
import { useState } from 'react';

// Componentes de bootstrap-react -> https://react-bootstrap.netlify.app/docs/components/cards
// hay que instalar: npm install react-bootstrap
import { Card, Button } from 'react-bootstrap';
import ModalDelete from '../modal/ModalDelete';

function BookItem({bookTitle, author, rating, pageCount, imageUrl}) {
  const [title, setTitle] = useState(bookTitle);
  const [show, setShow] = useState(false);

  const handleTitle = () => {
    setTitle('Titulo actualizado!');
  }

  const handleClose = () => {
    setShow(!show);
  }

  return (
    <>
      { show && <ModalDelete handleClose={handleClose} />}

      <Card style={{width:"22rem"}} className='cards'>
        <Card.Img 
          height={400} 
          variant='top' 
          className='book-image' 
          src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{author}</Card.Subtitle>
          <div>{rating} Estrellas</div>
          <p>{pageCount} páginas</p>

          {/* Button -> Componente de bootstrap, onclick llama a la función handleTitle */}
          <Button onClick={handleTitle}>Actualizar Título</Button>
          <Button onClick={handleClose}>Eliminar Título</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default BookItem