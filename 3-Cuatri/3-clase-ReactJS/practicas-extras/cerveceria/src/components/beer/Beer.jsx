import React, { useState } from 'react'
import BeerCard from '../BeerCard/BeerCard';
import SearchBeer from '../searchBeer/SearchBeer';

export const Beer = ({ beers, exchangeRate }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (value) => setSearch(value);

  // realiza filtro de cervezas a partir del search
  const filteredBeers = beers
    .filter(beer => search ? (beer.beerName.toLowerCase().includes(search)) : beer)
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

  return (
    <div>
      <SearchBeer onSearch={handleSearch} />

      <div className='beers'>
        {filteredBeers.length ? filteredBeers : <p>No encontramos esta cerveza.</p>}
      </div>
    </div>
  )
}
