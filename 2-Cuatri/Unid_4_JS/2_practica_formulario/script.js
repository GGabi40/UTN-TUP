/*  Valida lo siguiente usando JavaScript:

OK- El nombre no puede estar vacío.

OK - El número de teléfono debe contener solo números y 
OK - tener entre 8 y 15 dígitos.

OK - telefono no puede arrancar con 15

OK- si pais seleccionado es 5, .desaparece cambia de class a .aparece

*/

const body = document.querySelector('body');
const boxPais = document.querySelector('#boxPais');
const formulario = document.getElementById("contacto");

document.addEventListener('DOMContentLoaded', () => {
    const pais = document.querySelector("#pais");
    
    if(pais) {
        pais.addEventListener('change', cambiaColor);
    }
    
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const telefono = document.getElementById("telefono").value;
        const mail = document.getElementById('mail').value;
        const mensaje = document.getElementById('mensaje').value;
        const paisSeleccionado = Number(document.querySelector('#pais').value);
    
    
        validaNombre(nombre.trim());
        validaTelefono(telefono.trim());

        if(paisSeleccionado == 5) {
            const nombreOtro = document.querySelector('#nombrePais').value.trim();
            if (nombreOtro === '') {
                alert('Por favor, ingresa el nombre de tu país.');
                return; 
            } else {
                console.log('Nombre de país ingresado:', nombreOtro);
            }
        }
        
        alert(`${nombre} | ${telefono} | ${mail} | ${mensaje}`)
    });
});

const cambiaColor = () => {
    switch (Number(pais.value)) {
        case 0:
            body.style.backgroundImage = 'none'; // Sin gradiente, fondo blanco
            body.style.backgroundColor = 'white';
            break;
        case 1:
            body.style.backgroundImage = 'linear-gradient(to right, cyan, blue)';
            break;
        case 2:
            body.style.backgroundImage = 'linear-gradient(to right, greenyellow, green)';
            break;
        case 3:
            body.style.backgroundImage = 'linear-gradient(to right, yellow, orange)';
            break;
        case 4:
            body.style.backgroundImage = 'linear-gradient(to right, red, darkred)';
            break;
        case 5:
            body.style.backgroundImage = 'linear-gradient(to right, purple, pink)';
            boxPais.classList.add('aparece')
            boxPais.classList.remove('desaparece');

            const nombreOtro = document.querySelector('#nombrePais')
            return nombreOtro;
        default:
            body.style.backgroundImage = 'none';
            body.style.backgroundColor = 'white';
            break;
    }

    if (Number(pais.value) != 5) {
        boxPais.classList.remove('aparece');
        boxPais.classList.add('desaparece')
    }

    return Number(pais.value);
}

const validaNombre = (nombre) => {
    if (nombre == '' || nombre == ' ') {
        alert('Nombre no debe ser un espacio vacío.')
        return false
    }

    const regexNombre = /^[A-Za-z\s]+$/;

    if (!regexNombre.test(nombre)) {
        alert('El campo "Nombre" debe poseer solamente letras y espacios.');
        return false;
    }

    return true;
}

const validaTelefono = (telefono) => {
    invalidoTelefono = false;

    if (telefono == '' || telefono == ' ') {
        alert('Telefono no debe ser un espacio vacío.')
        return false;
    }

    if (telefono.length < 8 || telefono.length > 15 || isNaN(telefono)) {
        invalidoTelefono = true;
    }

    if(telefono.startsWith('15')) {
        alert('El número de teléfono no puede comenzar con "15".')
        return false;
    }
    

    if (invalidoTelefono) {
        alert('Telefono inválido.')
        return false;
    }

    return true;
}