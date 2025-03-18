// -- SPREAD
console.log("-- SPREAD --");

const numeros = [1,2,3,4,5];
console.log(numeros);

// ...nombreArray -> spread
// Crea un nuevo array con el array original
const nuevosNumeros = [...numeros, 6,7,8];
console.log(nuevosNumeros);


// -- DESTRUCTURING
console.log("-- DESTRUCTURING --");

const [a, b, c, d] = [2, 6, "perro", "gato"];

console.log(a);
console.log(b);
console.log(c);
console.log(d);


// -- ARRAY FUNCTIONS
// .map()
console.log("-- .MAP() --");

const doubleNumbers = numeros.map((num) => {
    return num * 2;
})

console.log(doubleNumbers);


// .filter()
console.log("-- .FILTER() --");

const filterNumbers = numeros.filter((num) => {
    return num > 3;
});

console.log(filterNumbers);


// .reduce()
console.log("-- .REDUCE() --");

const sumar = numeros.reduce((num, el) => {
    return num + el;
}, 0);

console.log(sumar);

