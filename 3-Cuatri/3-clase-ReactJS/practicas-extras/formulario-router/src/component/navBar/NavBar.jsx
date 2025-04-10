import './nav.css'
import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to='/nuevaPelicula' className="nav-link">Agregar nueva Película</Link>
        <Link to='/' className="nav-link">Cartelera</Link>
      </div>
    </nav>
  )
}

export default NavBar