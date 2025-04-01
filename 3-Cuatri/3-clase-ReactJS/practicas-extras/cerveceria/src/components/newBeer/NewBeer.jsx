import React, { use, useState } from 'react'

/* 
3 - Crear un componente NewBeer que tenga un formulario para agregar una nueva
cerveza.
*/

function NewBeer({ onSendBeer }) {
    const [nameBeer, setNameBeer] = useState('');
    const [styleBeer, setStyleBeer] = useState('');
    const [price, setPrice] = useState(0); // number
    const [available, setAvailable] = useState(false); // checkbox

    const handleNewBeers = (e) => {
        e.preventDefault();

        const newBeer = {
            beerName: nameBeer,
            beerStyle: styleBeer,
            price, // es lo mismo que price: price
            available // es lo mismo que available: available
        }

        onSendBeer(newBeer);
    }

  return (
    <div>
        <form onSubmit={handleNewBeers}>
            <label htmlFor='beerName'>Nombre de la Cerveza:</label>
            <input type="text" name="beerName" id="beerName" onChange={(e) => setNameBeer(e.target.value)} />
            <label htmlFor='beerStyle'>Tipo de Cerveza:</label>
            <input type="text" name="beerStyle" id="beerStyle" onChange={(e) => setStyleBeer(e.target.value)} />
            <label htmlFor='beerPrice'>Precio de la Cerveza:</label>
            <input type="number" name="beerPrice" id="beerPrice" step={0.01} onChange={(e) => setPrice(Number(e.target.value))} />
            <label htmlFor="available">¿Está Disponible? <input type="checkbox" name="available" id="available" onChange={(e) => setAvailable(e.target.checked)} /></label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default NewBeer