import "./App.css";
import beers from './data/beers.js';

import { Beer } from "./components/beer/Beer"
import ChangeDollar from './components/changeDollar/ChangeDollar'
import BeerStyle from "./components/BeerStyle";
import QuantityStyle from "./components/QuantityStyle";


/* Practicas adicionels */
import AllProducts from "./components/aditional-practice-1/AllProducts";
import Persons from "./components/aditional-practice-2/Persons";
import Family from "./components/aditional-practice-3/Family";
import { useState } from "react";

function App() {
  const [exchangeRate, setExchangeRate] = useState(1200);

  /*  Practicas adicionales  */
  const products = ["table","couch","chair1","chair2"];

  const names = ["Parker","Simmons","Lewis","Poe"];

  const persons = [
    { name: 'Juan', age: 26 },
    { name: 'Gabriel', age: 27 },
    { name: 'Valentina', age: 22 },
    { name: 'Paula', age: 25 },
    { name: 'Andrés', age: 20 }
  ];

  const personsOrganized = persons.sort((a,b) => b.age - a.age);
  /* Fin practicas adicionales  */

  return (
    <>
    <div className="practica-cerveceria">
      <h1>Cervecería 🍻</h1>
      <ChangeDollar exchangeRate={exchangeRate} setExchangeRate={setExchangeRate} />

      <h2>Nuestro menú:</h2>
      <Beer beers={beers} exchangeRate={exchangeRate} />

      <div className="quantity">
        <QuantityStyle beers={beers} />
      </div>

      <div className="styles">
        <BeerStyle beers={beers} />
      </div>
    </div>

    <hr />

    {/* --- Practicas adicionales--- */}
    <div className="practica-adicional">
      <h1>Práctica Adicional 1</h1>
      <AllProducts products={products} />
    </div>

    
    <hr />

    <div className="practica-adicional">
      <h1>Práctica Adicional 2</h1>
      <Persons personsName={names} />
    </div>

    <hr />

    <div className="practica-adicional">
      <h1>Práctica Adicional 3</h1>
      <Family persons={personsOrganized} />
    </div>

    {/* FIN Practicas adicionales */}
    </>
  );
}

export default App;
