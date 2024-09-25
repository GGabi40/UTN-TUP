/* EJERCICIOS PRACTICA UNIDAD 1 */

// 7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
// los tres.

let nro1 = 2;
let nro2 = 5;
let nro3 = 3;

if(nro1 > nro2 && nro1 > nro3) {
    console.log(`El numero 1 es mayor`);
} else if(nro2 > nro1 && nro2 > nro3) {
    console.log(`El numero 2 es mayor`);
} else {
    console.log(`El numero 3 es mayor`);
}

// -------------------------------------------------------------

// 8. Escribe un programa que pida un número y diga si es divisible por 2

let nro = 5;
if(nro % 2 == 0) {
    console.log(`Es divisible por 2.`);
} else {
    console.log(`No es divisible por 2.`);
}

// -------------------------------------------------------------

// 9. Escribe un programa que pida una frase y escriba cuantas veces aparece la
// letra a

let frase = 'Una frase aquí';
let vocales = ['a', 'e', 'i', 'o', 'u'];
let contador = 0;

for(let i = 0; i < frase.length; i++) {
    if(vocales.includes(frase[i].toLowerCase())) {
        contador++;
    }
}
console.log(`Hay ${contador} vocales`);

// 10. Escribe un programa que pida una frase y escriba las vocales que aparecen

let acumulaVocales = [];

for(let i = 0; i < frase.length; i++) {
    if(vocales.includes(frase[i].toLowerCase())) {
        acumulaVocales.push(frase[i].toLowerCase());
    }
}

console.log("Las vocales que aparecen son: ", acumulaVocales);

// -------------------------------------------------------------

// 12. Escribe un programa que pida una frase y escriba cuántas veces aparecen
// cada una de las vocales

let frase2 = "Hola que tal";
//                a  e  i  o  u
let contadores = [0, 0, 0, 0, 0];

for(let i = 0; i < frase2.length; i++) {
    let letra = frase2[i].toLowerCase();

    // si en letra está alguna de las vocales del array:
    if(vocales.includes(letra)) {
        let posicionVocal = vocales.indexOf(letra); // ver cuál es el índice que está
        contadores[posicionVocal]++; // incrementar en 1 el indice de la vocal en la posición
    }
}

for(let i = 0; i < vocales.length; i++) {
    console.log(`${vocales[i]} se repite ${contadores[i]} veces.`);
}


// -------------------------------------------------------------

// 13 y 14. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o
// 7 (sólo hay que comprobar si lo es por uno de los cuatro)

let numero = 8;

if(numero % 2 == 0) {
    console.log("Divisible por 2.");
} else if (numero % 3 == 0) {
    console.log("Divisible por 3.");
} else if (numero % 5 == 0) {
    console.log("Divisible por 5.");
} else if (numero % 7 == 0) {
    console.log("Divisible por 7.");
} else {
    console.log("No es divisible por 2, 3, 5 o 7.");
}


// -------------------------------------------------------------

// 15. Escribir un programa que escriba en pantalla los divisores de un número dado

let numero2 = 10;
let divisores = [];

for(let i = 0; i < numero2; i++) {
    if(numero2 % i == 0) {
        divisores.push(i);
    }
}

console.log(`${numero2} es divisible por ${divisores}`);

// -------------------------------------------------------------

// 16. Escribir un programa que escriba en pantalla los divisores comunes de dos
// números dados

let n1 = 90;
let n2 = 60;
let divisores1 = [];
let divisores2 = [];
let mdc = [];

// Divisores del primer numero
for(let i = 1; i <= n1; i++) {  // Empezar desde 1
    if(n1 % i == 0) {
        divisores1.push(i);
    }
}

// Divisores del segundo numero
for(let i = 1; i <= n2; i++) { 
    if(n2 % i == 0) {
        divisores2.push(i);
    }
}

// Encontrar divisores comunes
for(let i = 0; i < divisores1.length; i++) {
    if(divisores2.includes(divisores1[i])) { 
        mdc.push(divisores1[i]);
    }
}

console.log(`Los divisores comunes de ${n1} y ${n2} es: ${mdc}`);

// -------------------------------------------------------------

// 17. Escribir un programa que nos diga si un número dado es primo (no es divisible
//     por ninguno otro número que no sea él mismo o la unidad)

let primo = 2;

if(primo % 2 != 0) {
    console.log("Es un numero primo.");
} else {
    console.log("No es un numero primo.");
}

// -------------------------------------------------------------

// 19. Pide una nota (número). Muestra la calificación según la nota:
//     ● 0-3: Muy deficiente
//     ● 3-5: Insuficiente
//     ● 5-6: Suficiente
//     ● 6-7: Bien
//     ● 7-9: Notable
//     ● 9-10: Sobresaliente

let nota = 1;

if(nota >= 0 && nota < 3) {
    console.log("Muy Deficiente.");
} else if(nota >= 3 && nota < 5) {
    console.log("Insuficiente.");
} else if(nota >= 5 && nota < 6) {
    console.log("Suficiente.");
} else if(nota >= 6 && nota < 7) {
    console.log("Bien.");
} else if(nota >= 7 && nota < 9) {
    console.log("Notable.");
} else if (nota >= 9 && nota <= 10){
    console.log("Sobresaliente.");
} else {
    console.error("Nota no válida.");
}

// -------------------------------------------------------------

// 20. Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
// salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión

let cadena1 = 'hola';
let cadena2 = 'que';
let cadena3 = 'tal';
let cadena4 = 'como';
let cadena5 = 'estás';

let cadenaTotal = [];

cadenaTotal.push(cadena1, cadena2, cadena3, cadena4, cadena5);
let total = cadenaTotal.join('-');

console.log(total);

// -------------------------------------------------------------
