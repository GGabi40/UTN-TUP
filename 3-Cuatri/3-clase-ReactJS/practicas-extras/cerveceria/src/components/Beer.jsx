import React from 'react'

export const Beer = ({name, style, price, available}) => {
    const dollarPrice = 1068.69;

  return (
    <div>
        <div className="card">
            <h3>
                <strong>{name}</strong>
            </h3>
            <p>{style}</p>
            <p id="price">
                Precio: {(price * dollarPrice).toFixed(2)}
            </p>
            <p>
                <strong>{available ? 'Disponible' : 'No disponible'}</strong>
            </p>
        </div>
    </div>
  )
}
