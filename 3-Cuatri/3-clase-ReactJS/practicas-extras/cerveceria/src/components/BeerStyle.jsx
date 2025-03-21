import React from 'react'

function BeerStyle({ beers }) {
    let beerStyles = [];
    beers.map((beer) => {
        if(!beerStyles.includes(beer.beerStyle)) beerStyles.push(beer.beerStyle);
    });

  return (
    <div>
        <h2>Estlos de Cervezas Disponibles:</h2>
        <div className="beers">
            {beerStyles.map((style) => {
                return (
                    <div key={style} className='card'>
                        {style}
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default BeerStyle