// --- Variables: let y const

// let -> valor cambia.
// const -> valor constante.

let nombre = "Juan";
console.log(nombre) // imprime Juan;

nombre = "Gab";
console.log(nombre) // imprime Gab;


const edad = 22;
console.log(edad) // imprime 22;
/* edad = 12;
console.log(edad); */ // tira error -> no se puede redefinir o cambiar su valor


// --- Scope de Bloque

for(let i = 0; i < 3; i++) {
    console.log('Dentro del bucle: ', i);
}
// console.log('Fuera del bucle: ', i); // tira error -> está fuera del bucle

// let -> vive dentro del bloque que fue definido.



// --- Arrow Functions
// Función declarada (sin arrow function):
function cuadrado(num) {
    return num*num;
}

// función expresada (arrow function):
const cuadradoExpresadoUno = (num) => {
    return num*num;
};

// o sino, se puede escribir:
const cuadradoExpresadoDos = (num) => num*num;

console.log(cuadrado(3));
console.log(cuadradoExpresadoUno(2));
console.log(cuadradoExpresadoDos(5));