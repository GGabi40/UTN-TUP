import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router'

const NotFound = () => {
  const navigate = useNavigate();

  const goBackLoginHandler = () => {
    navigate('/');
  }

  return (
    <div>
        <h1>Uppssss... Error 404 😢</h1>
        <p>Página no encontrada.</p>
        <Button className="text-center" onClick={goBackLoginHandler}>
          Volver a Iniciar Sesión
        </Button>
    </div>
  )
}

export default NotFound