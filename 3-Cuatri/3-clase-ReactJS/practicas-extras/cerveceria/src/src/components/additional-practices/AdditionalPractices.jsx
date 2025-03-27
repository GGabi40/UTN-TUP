import React from "react";

import AllProducts from "./components/additional-practice-1/AllProducts";
import Persons from "./components/additional-practice-2/Persons";
import Family from "./components/additional-practice-3/Family";

function AdditionalPractices() {
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

  return (
    <div>
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
    </div>
  );
}

export default AdditionalPractices;
