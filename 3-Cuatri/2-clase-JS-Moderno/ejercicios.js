let input = [
    {name: 'John', age: 28, city: "New York"},
    {name: 'Mike', age: 28, city: "Moscow"},
    {name: 'Lisa', age: 22, city: "London"},
]


// Ejercicio 1
// solo names:
const returnNames = (inputValue) => inputValue.map((item) => item.name);

console.log(' -- NAMES -- ');
console.log(returnNames(input));



// Ejercicio 2
// filter por edad:
const filterAge = (inputValue) => inputValue.filter((item) => item.age > 25)
                                            .map((item) => item.name);

console.log(' -- AGES -- ');
console.log(filterAge(input));



// Ejercicio 3
// sort --> Organización:
const countries = [
    {name: "Argentina", population: 46000000},
    {name: "Uruguay", population: 34000000},
    {name: "Brasil", population: 200000000},
]

// organización de mayor a menor
console.log(' -- SORT -- ');
console.log(countries.sort((a,b) => b.population - a.population));



// Ejercicio 4 -> Tu objetivo es contar cuántas son las más altas de la torta
const candles = [4, 4, 1, 3];

const velasAltas = Math.max(...candles);
const cantVelasAltas = candles.filter(altas => altas === velasAltas);

console.log(cantVelasAltas.length);
