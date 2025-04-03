import React from 'react'

const Busqueda = ({ onSearch, search }) => {

  return (
    <div>
        <input 
          type='text' 
          id='busqueda' 
          placeholder='Ingrese el contacto'
          value={search}
          onChange={(e) => onSearch(e.target.value)}
        />
    </div>
  )
}

export default Busqueda