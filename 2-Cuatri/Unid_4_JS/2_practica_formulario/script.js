/*  Valida lo siguiente usando JavaScript:

El nombre no puede estar vacío.

El número de teléfono debe contener solo números y 
tener entre 8 y 15 dígitos.

telefono no puede arrancar con 15

si pais seleccionado es 5, .desaparece cambia de class a .aparece

*/

/* 
                    accion     funcion
.addEventListener("submit", function(event) {
*/

const formulario = document.getElementById("contacto");

formulario.addEventListener("submit", () => {
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const mail = document.getElementById("mail").value;
    const mensaje = document.getElementById("mensaje").value;
    const pais = document.getElementById("pais").value;


    console.log(nombre.trim());

});
