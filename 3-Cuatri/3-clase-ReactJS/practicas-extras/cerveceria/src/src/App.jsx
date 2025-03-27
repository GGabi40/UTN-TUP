import "./App.css";
import initialBeers from "./data/beers.js";

import { useState } from "react";

import { Beer } from "./components/beer/Beer";
import ChangeDollar from "./components/changeDollar/ChangeDollar";
import BeerStyle from "./components/BeerStyle";
import QuantityStyle from "./components/QuantityStyle";

/* Practicas adicionels */
import AdditionalPractices from "./components/additional-practices/AdditionalPractices";
import NewBeer from "./components/newBeer/NewBeer.jsx";

function App() {
  const [exchangeRate, setExchangeRate] = useState(1200);
  const [beers, setBeers] = useState(initialBeers);

  const handleBeerAdded = (data) => {
    const beerData = {
      ...data,
      id: Math.random().toString()
    }

    setBeers((prevBeers) => {
      return [...prevBeers, beerData]
    })
  }

  return (
    <>
      <div className="practica-cerveceria">
        <h1>Cervecería 🍻</h1>
        <ChangeDollar
          exchangeRate={exchangeRate}
          setExchangeRate={setExchangeRate}
        />

        <NewBeer onSendBeer={handleBeerAdded} />

        <h2>Nuestro menú:</h2>
        <Beer beers={beers} exchangeRate={exchangeRate} />

        <QuantityStyle beers={beers} />

        <BeerStyle beers={beers} />
      </div>

      {/* Practicas adicionales: */}
      <hr />
      <AdditionalPractices />
    </>
  );
}

export default App;
