/*  EJERCICIO 1
Realizar una función, a la que se le pase como parámetro un número N,
y muestre por consola N veces, el siguiente mensaje: “Bienvenidos al
curso Full Stack”
*/

function mostrarNveces(n) {
    for(let i = 0; i < n; i++) {
        console.log("EJERCICIO 1: Bienvenidos al curso Full Stack");
    }
}

mostrarNveces(3);

/*  EJERCICIO 2
Diseñar una función que tenga como parámetros dos números, y que
calcule el máximo.
*/

function dosNumeros(num1, num2) {
    if(num1 > num2) {
        console.log("EJERCICIO 2: El numero 1 es mayor que el numero 2");
    } else {
        console.log("EJERCICIO 2: El numero 2 es mayor que el numero 1");
    }
}

dosNumeros(1, 2);

/*  EJERCICIO 3
Crear una función que se llame promedio3, que reciba como
parámetro tres valores y devuelva el promedio de los mismos.
*/

function promedio3(num1, num2, num3) {
    const promedio = (num1 + num2 + num3) / 3;
    console.log("EJERCICIO 3: El promedio de estos 3 numeros es: ", promedio.toFixed(2));
}

promedio3(2, 5, 10);

/*  EJERCICIO 4
Crear una función que lea notas hasta que ingrese -1 y devuelve el
promedio de las notas leídas. ( aunque no se suele leer valores en una
función)

Una función que se llame siguiente, que reciba como
parámetro un valor entero, y devuelva el siguiente del número
ingresado como parámetro
*/

function notas() {
    let contador = 0;
    let resultado = 0;
    let suma = 0;
    let notas;
    
    do {
        notas = parseFloat(window.prompt("Ingrese notas. Para salir ingrese -1"));

        if (notas != -1) {
            suma += notas;
            contador++;
        }
    } while(notas != -1);
    
    let promedio = suma / contador;
    console.log("La cantidad de notas ingresada fue de: ", contador);
    console.log("El promedio de las notas es de: ", promedio.toFixed(2));
}

notas();