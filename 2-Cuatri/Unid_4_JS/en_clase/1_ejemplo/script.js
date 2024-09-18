console.log("Hola Mundo!"); /* mostrar por consola */
console.log(4+"2");

/* VARIABLES */
var nombre = "Gabi"; // ya no es utilizado
let edad; // variable que puede tomar otro valor
edad = 22;
edad = 12;

const apellido = "Perez"; // variable que no toma otro valor 
// apellido = "Luna"; -> Error

console.log(apellido, edad);
console.log(nombre);

console.log((2+3)*2);

let valorInexistente;
console.log(valorInexistente); // undefined

// --- typeof: identifica el tipo de dato de una variable
console.log(typeof nombre);


// -- Prompt
let edadUsuario;
edadUsuario = Number(prompt("Cual es tu edad?")); // tira cartel con pregunta y convierte a numero

document.write("La edad ingresada por el usuario fue: ", edadUsuario, "<br>");

if(edadUsuario >= 18) {
    document.write("Es mayor");

} else {
    document.write("Es menor");
}

// -- otra manera de escribir
const div = document.querySelector("#respuesta"); // selecciono de "document" (documento HTML) el elemento
// con id "respuesta" y lo guardo en variable div

div.innerHTML = "Escribí!"; // en div escribo 
