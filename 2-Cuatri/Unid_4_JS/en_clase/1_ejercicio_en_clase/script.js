/* 
Realizar la carga de una nota de un alumno.
Mostrar un mensaje que aprobó si tiene una nota mayor o igual a 4:
*/

const nota = parseFloat(prompt("Ingrese la nota del alumno:"));

if (nota >= 4) {
  document.write("Este alumno aprobó.");
} else {
  document.write("Este alumno reprobó.");
}

document.write("<br>"); // salto de linea
document.write("<br>");

/*
Se ingresa por teclado el sueldo de un empleado 
(se puede ingresar un valor con decimales), si el sueldo 
supera los 3000 pesos, luego mostrar un mensaje indicando 
que debe abonar impuestas. 
*/

const sueldo = parseFloat(prompt("Ingrese el sueldo de un empleado:"));

if (sueldo > 3000) {
  document.write("Debe abonar impuestos.");
} else {
  document.write("No debe abonar impuestos.");
}

document.write("<br>");

/* 
Realizar un programa que lea por teclado dos números,
 si el primero es mayor al segundo informar su suma y diferencia, 
 en caso contrario informar el producto y la división 
 del primero respecto al segundo. */

let numero1 = parseInt(prompt("Ingrese el primer numero: "));
let numero2 = parseInt(prompt("Ingrese el segundo numero: "));

if (numero1 > numero2) {
  document.write("Numero1 es mayor.");
  document.write("<br>");
  document.write("Suma: ", numero1 + numero2);
  document.write("<br>");
  document.write("Diferencia: ", numero1 - numero2);
} else {
  document.write("Numero1 es menor.");
  document.write("<br>");
  document.write("Producto: ", numero1 * numero2);
  document.write("<br>");
  document.write("División: ", numero1 / numero2);
}

/* 
Se ingresan tres notas de un alumno, si el promedio es mayor o 
igual a 4 mostrar un mensaje 'regular', sino 'reprobado'.
*/
document.write("<br>");

let nota1 = parseInt(prompt("Ingrese la primer nota: "));
let nota2 = parseInt(prompt("Ingrese la segundo nota: "));
let nota3 = parseInt(prompt("Ingrese la tercer nota: "));

let promedio = (nota1 + nota2 + nota3) / 3;

if (promedio >= 4) {
  document.write("Regular.");
} else {
  document.write("Reprobado.");
}

document.write("<br>");

/* 
Confeccionar un programa que pida por teclado tres notas de un alumno,
calcule el promedio e imprima alguno de estos mensajes:

Si el promedio es >=7 mostrar "Promocionado".
Si el promedio es >=4 y <7 mostrar "Regular".
Si el promedio es <4 mostrar "Reprobado".
*/

if (promedio >= 7) {
  document.write("Promocionado.");
} else if (promedio >= 4 || promedio < 7) {
  document.write("Regular.");
} else {
  document.write("Reprobado.");
}

/* Se ingresa por teclado un número positivo de uno o dos dígitos (1..99) 
mostrar un mensaje indicando si el número tiene uno o dos dígitos 
(recordar de convertir a entero con parseInt para preguntar posteriormente por una variable entera). 
Tener en cuenta qué condición debe cumplirse para tener dos dígitos un número entero. -->
*/

let numero = Number(prompt("Ingrese un numero: "));
if (numero >= 9) {
  document.write("El numero es de dos digito");
} else {
  document.write("El numero es de un digitos");
}
