import "./App.css";
import { Beer } from "./components/beer";
import BeerStyle from "./components/BeerStyle";
import QuantityStyle from "./components/QuantityStyle";

import AllProducts from "./components/aditional-practice-1/AllProducts";
import Persons from "./components/aditional-practice-2/Persons";
import Family from "./components/aditional-practice-3/Family";

function App() {
  const beers = [
    {
      id: 1,
      beerName: "American",
      beerStyle: "IPA",
      price: 3,
      available: true,
    },
    {
      id: 2,
      beerName: "Argenta",
      beerStyle: "IPA",
      price: 4,
      available: false,
    },
    {
      id: 3,
      beerName: "Irish",
      beerStyle: "Red",
      price: 4,
      available: true,
    },
    {
      id: 4,
      beerName: "Scotish",
      beerStyle: "Red",
      price: 3,
      available: true,
    },
    {
      id: 5,
      beerName: "DeEssoCiTratta",
      beerStyle: "APA",
      price: 3,
      available: true,
    },
    {
      id: 6,
      beerName: "Santa APA",
      beerStyle: "APA",
      price: 3,
      available: true,
    },
    {
      id: 7,
      beerName: "German",
      beerStyle: "Pilsen",
      price: 1,
      available: true,
    },
    {
      id: 8,
      beerName: "London Porter",
      beerStyle: "Porter",
      price: 2,
      available: false,
    },
    {
      id: 9,
      beerName: "Scotish ALE",
      beerStyle: "Red",
      price: 5,
      available: false,
    },
  ];

  /* Practica adicional 1 */
  const products = ["table","couch","chair1","chair2"];

  /* Práctica adicional 2 */
  const names = ["Parker","Simmons","Lewis","Poe"];

  /* Práctica adicional 3 */
  const persons = [
    { name: 'Juan', age: 26 },
    { name: 'Gabriel', age: 27 },
    { name: 'Valentina', age: 22 },
    { name: 'Paula', age: 25 },
    { name: 'Andrés', age: 20 }
  ];

  const personsOrganized = persons.sort((a,b) => b.age - a.age);

  return (
    <>
    <div className="practica-cerveceria">
      <h1>Cervecería Prog3</h1>
      <h2>Nuestro menú:</h2>
      <div className="beers">
        {beers
          .filter((beer) => beer.available)
          .map((beer) => {
            return (
              <Beer
                name={beer.beerName}
                style={beer.beerStyle}
                price={beer.price}
                available={beer.available}
              />
            );
          })}
      </div>

      <div className="quantity">
        <QuantityStyle beers={beers} />
      </div>

      <div className="styles">
        <BeerStyle beers={beers} />
      </div>
    </div>

    <hr />

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

    </>
  );
}

export default App;
