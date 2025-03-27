import React from 'react'

function BeerCard({name, style, price, available, exchangeRate}) {
  return (
    <div className="card">
            <h3>
                <strong>{name}</strong>
            </h3>
            <p>{style}</p>
            <p id="price">
                Precio: {(price * exchangeRate).toFixed(2)}
            </p>
            <p>
                <strong>{available ? 'Disponible' : 'No disponible'}</strong>
            </p>
    </div>
  )
}

export default BeerCard