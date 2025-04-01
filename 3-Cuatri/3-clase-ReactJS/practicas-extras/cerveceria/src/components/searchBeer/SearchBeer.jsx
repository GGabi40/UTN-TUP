import React from 'react'

const SearchBeer = ({ search, onSearch }) => {
    // recibe de "Beer" los valores de search
    // envia a Beer el cambio que ocurre en search "onChange"
  return (
    <div>
        <form className="formulario">
            <label>🍻 Buscar Cerveza:</label>
            <input 
                type="text" 
                name="search" 
                id="search"
                placeholder='Ingrese un nombre'
                value={search}
                onChange={(e) => onSearch(e.target.value)}
            />
        </form>
    </div>
  )
}

export default SearchBeer