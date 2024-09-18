
/* 
Valida lo siguiente usando JavaScript:

El nombre no puede estar vacío.
El número de teléfono debe contener solo números y 
tener entre 8 y 15 dígitos.

El correo electrónico debe tener un formato válido.

El mensaje debe tener al menos 10 caracteres
 y no más de 500 caracteres.
*/

/* Otras maneras de escribir
1. formulario.addEventListener("submit", () => {});

2. formulario.addEventListener("submit", function() {});

3. formulario.addEventListener("submit", nombreFuncion);
// Para la 3a, hay que tener la función declarada \/
function nombreFuncion() {}
*/

/* 
                    accion     funcion
.addEventListener("submit", function(event) {
 */

const formulario = document.getElementById("contacto");


formulario.addEventListener("submit", () => {
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let mail = document.getElementById("mail").value;
    let mensaje = document.getElementById("mensaje").value;

    console.log(nombre.trim());

});
