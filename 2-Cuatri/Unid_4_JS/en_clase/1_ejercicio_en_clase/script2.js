let numero1 = parseInt(prompt("Ingrese el primer numero:"));
let numero2 = parseInt(prompt("Ingrese el segundo numero:"));
let numero3 = parseInt(prompt("Ingrese el tercer numero:"));

if (numero1 > numero2 && numero1 > numero3) {
  console.log("El numero 1 es el mayor");
} else if (numero2 > numero1 && numero2 > numero3) {
  console.log("El numero 2 es el mayor");
} else {
  console.log("El numero 3 es el mayor");
}
