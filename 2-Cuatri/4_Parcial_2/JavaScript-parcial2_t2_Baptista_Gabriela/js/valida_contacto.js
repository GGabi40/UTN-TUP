const formulario = document.querySelector('#contactoForm');


formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const terminos = document.getElementById("terminos");
    const fechaNac = document.getElementById('fechaNacimiento').value;
    const telefono = document.getElementById('telefono').value;
    const pais = document.getElementById('pais').value;

    const nombreValidado = verificaNombre(nombre.trim());
    const emailValidado = verficaEmail(email.trim());
    const tyc = verificaTyC(terminos);
    const fechaNacimientoValidada = verificaFecha(fechaNac);
    const telefonoValidado = verificaTelefono(telefono.trim());
    const paisValidado = verificaPais(pais);

    if (nombreValidado && emailValidado && tyc && fechaNacimientoValidada && telefonoValidado && paisValidado) {
        alert('validado.')
        formulario.submit();
    } else {
        alert('Verifique sus datos...');
    }

});

// Envía mensaje de error
function mensajeError(id, msj) {
    const idInput = document.getElementById(id);

    idInput.textContent = msj;
}


// -- Verificaciones --

// Verifica que no esté vacío
function verificaPais(pais) {
    if (pais == '') {
        mensajeError('paisError', 'Seleccione un país.');
        return false;
    }

    return true;
}


/* Verifica que arranque con +549 y que su 
longitud sea mayor a 4 */
function verificaTelefono(telefono) {
    if(telefono.startsWith('+549') && telefono.length > 4) {
        return true;
    } else {
        mensajeError('telefonoError', 'Introduce un teléfono válido en el formato +549...');
        return false;
    }
}


/* Verifica que la fecha de nacimiento no sea
mayor a la fecha actual
-> La fecha mínima fue definida en el HTML */
function verificaFecha(fecha) {
    const hoy = new Date();
    hoy.setDate(hoy.getDate() +1);

    if(new Date(fecha) > hoy) {
        mensajeError('fechaError', 'Fecha de Nacimiento Inválida.')
        return false
    }

    return true;
}


/* Verifica que el email tenga "@" y ".com"*/
function verficaEmail(email) {
    if(email.includes('@') && email.includes('.com')) {
        return true;
    } else {
        mensajeError('emailError', 'Introduce un email válido.');
        return false;
    }
}

/* Verifica que terminos y condiciones esté marcado */
function verificaTyC(terminos) {
    if (!terminos.checked) {
        mensajeError('terminosError', 'Debes leer y aceptar los términos y condiciones.');
        return false;
    }

    return true;
}

/* Verifica que nombre no esté vacío y que no haya símbolos */
function verificaNombre(nombre) {
    const caracteresValidos = /^[a-zA-Z\s]+$/;

    if (nombre == '' || nombre == ' ' || nombre.length < 5) {
        mensajeError('nombreError', 'El nombre debe tener al menos 5 caracteres.');
        return false;
    }

    if(!(caracteresValidos.test(nombre))) {
        mensajeError('nombreError', 'El nombre debe poseer solamente letras.');
        return false;
    }


    return true;
}
