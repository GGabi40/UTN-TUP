import React from 'react'
import BeerCard from '../BeerCard/BeerCard';

export const Beer = ({ beers, exchangeRate }) => {
    
  return (
    <div className='beers'>
        {
            beers
            .filter((beer) => beer.available)
            .map((beer, index) => {
                return (
                <BeerCard
                    key={index}
                    name={beer.beerName}
                    style={beer.beerStyle}
                    price={beer.price}
                    available={beer.available}
                    exchangeRate={exchangeRate}
                />
                );
            })
          }
    </div>
  )
}
