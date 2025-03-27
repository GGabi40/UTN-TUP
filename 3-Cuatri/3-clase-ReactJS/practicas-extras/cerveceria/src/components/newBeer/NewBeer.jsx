import React, { useState } from 'react'

/* 
3 - Crear un componente NewBeer que tenga un formulario para agregar una nueva
cerveza.
*/

function NewBeer() {
    const [newBeer, setNewBeer] = useState('');

    const handleNewBeers = (e) => {
        e.preventDefault();
        // codigo
    }

  return (
    <div>
        <form onSubmit={handleNewBeers}>
            <label htmlFor='beerName'>Nombre de la Cerveza:</label>
            <input type="text" name="beerName" id="beerName" />
            <label htmlFor='beerStyle'>Tipo de Cerveza:</label>
            <input type="text" name="beerStyle" id="beerStyle" />
            <label htmlFor='beerPrice'>Precio de la Cerveza:</label>
            <input type="number" name="beerPrice" id="beerPrice" />
            <label htmlFor="available">¿Disponible?</label>
            <input type="checkbox" name="available" id="available" />
        </form>
    </div>
  )
}

export default NewBeer