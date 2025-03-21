import React from "react";

function QuantityStyle({ beers }) {

    const count = beers.reduce((acc, beer) => {
        if(beer.beerStyle === 'Red' || beer.beerStyle === 'IPA') {
            !acc[beer.beerStyle] ? acc[beer.beerStyle] = 1 : acc[beer.beerStyle]++;
        }
        return acc;
    },{});

  return (
    <div>
        <h2>Cantidad de Cervezas por Estilo:</h2>
        {
            Object.entries(count).map(([style, quantity]) => (
                <div className="quantity-div">
                    <strong>{style}: </strong> {quantity}
                </div>
            ))
        }
    </div>
  );
}

export default QuantityStyle;
