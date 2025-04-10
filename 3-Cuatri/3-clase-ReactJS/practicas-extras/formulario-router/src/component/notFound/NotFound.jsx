import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 🥲</h1>
      <p>La página que estás buscando no existe.</p>
      <Link to="/" className="btn-volver">Volver a la cartelera</Link>
    </div>
  )
}

export default NotFound