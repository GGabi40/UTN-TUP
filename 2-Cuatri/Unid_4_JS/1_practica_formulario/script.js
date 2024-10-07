
/* 
Valida lo siguiente usando JavaScript:

OK - El nombre no puede estar vacío.
OK - El número de teléfono debe contener solo números y 
OK - tener entre 8 y 15 dígitos.

OK - El correo electrónico debe tener un formato válido. - require en form

OK - El mensaje debe tener al menos 10 caracteres
 y no más de 500 caracteres.
*/

/* Otras maneras de escribir
1. formulario.addEventListener("submit", () => {});

2. formulario.addEventListener("submit", function() {});

3. formulario.addEventListener("submit", nombreFuncion);
// Para la 3a, hay que tener la función declarada \/
function nombreFuncion() {}
*/

const formulario = document.getElementById("contacto");
const campoError = document.querySelector('#respuesta');
let intervalo;

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let mail = document.getElementById("mail").value;
    let mensaje = document.getElementById("mensaje").value;

    const validacionNombre = validaNombre(nombre.trim());
    const validacionTelefono = validaTelefono(telefono.trim());
    const validacionMensaje = validaMensaje(mensaje);

    if (validacionNombre && validacionTelefono && validacionMensaje) {
        enviaTodo(nombre, telefono, mail, mensaje);
    }

});

const enviaTodo = (nombre, telefono, mail, mensaje) => {
    alertas('Los datos fueron recebidos correctamente', true)
    alert(`Nombre: ${nombre} | Telefono: ${telefono} | Mail: ${mail} | Mensaje: ${mensaje}`)
}

const validaMensaje = (mensaje) => {
    if(mensaje.length < 10 || mensaje.length > 500 || mensaje == '') {
        alertas('El mensaje debe poseer entre 10 y 500 palabras.')
        return false;
    }

    return true;
}

const validaNombre = (nombre) => {
    if(nombre == '') {
        alertas('El campo "Nombre" no debe estar vacío.', false)
        return false;
    }

    // Expresión regular para verificar solo letras y espacios
    const regexNombre = /^[A-Za-z\s]+$/;

    if (!regexNombre.test(nombre)) {
        alertas('El campo "Nombre" debe poseer solamente letras y espacios.', false);
        return false;
    }

    return true;
}

const validaTelefono = (telefono) => {
    if(telefono == '') {
        alertas('El campo "Teléfono" no debe estar vacío.', false)
        return false;
    }

    if(telefono.length < 8 || telefono.length > 15) {
        alertas('Teléfono inválido.', false)
        return false;
    }

    letra = false;

    for (let i = 0; i < telefono.length; i++) {
        if(isNaN(telefono) || telefono < 0) {
            letra = true;
            break;
        }
    }

    if(letra) {
        alertas('El campo "Teléfono" debe poseer solamente números.', false)
        return false;
    }

    return true;
}

const alertas = (mensaje, valido) => {
    if(valido) {
        campoError.classList.remove('error');
        mensaje = 'Recebido Correctamente.'
        campoError.classList.add('correcto');
        tiempo = 10000
    } else {
        campoError.classList.remove('correcto');
        campoError.classList.add('error');
        tiempo = 4000
    }
    
    campoError.textContent = mensaje;
    campoError.style.display = 'block';

    if(!intervalo) {
        intervalo = setInterval(desaparece, tiempo)
    }
}

const desaparece = () => {
    campoError.style.display = "none"
    clearInterval(intervalo);
    intervalo = null;
}