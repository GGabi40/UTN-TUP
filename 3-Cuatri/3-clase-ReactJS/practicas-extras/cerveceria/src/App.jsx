import "./App.css";
import beers from "./data/beers.js";

import { useState } from "react";

import { Beer } from "./components/beer/Beer";
import ChangeDollar from "./components/changeDollar/ChangeDollar";
import BeerStyle from "./components/BeerStyle";
import QuantityStyle from "./components/QuantityStyle";

/* Practicas adicionels */
import AdditionalPractices from "./components/additional-practices/AdditionalPractices";

function App() {
  const [exchangeRate, setExchangeRate] = useState(1200);

  return (
    <>
      <div className="practica-cerveceria">
        <h1>Cervecería 🍻</h1>
        <ChangeDollar
          exchangeRate={exchangeRate}
          setExchangeRate={setExchangeRate}
        />

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
