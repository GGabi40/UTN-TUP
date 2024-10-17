const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;

    let nombreValido = validaNombre(nombre.trim());
    let emailValido = validaMail(email.trim());
    let passValido = validaPass(pass.trim());

    if (nombreValido && emailValido && passValido) {
        muestraMensaje('Acceso permitido.', true);
    } else {
        muestraMensaje('Acceso denegado.', false);
    }
});

const validaNombre = (nombre) => {
    if(nombre == '') {
        return false;
    }

    if (isNaN(nombre) && nombre.length >= 3) {
        return true;
    }
}

const validaMail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const validaPass = (pass) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(pass);
}

const muestraMensaje = (msj, esValido) => {
    respuesta = document.getElementById('mensaje');

    if (esValido) {
        respuesta.classList.remove('error');
        respuesta.classList.add('correcto');
        respuesta.style.display = 'block';

        respuesta.textContent = msj;
    } else {
        respuesta.classList.remove('correcto');
        respuesta.classList.add('error');
        respuesta.style.display = 'block';

        respuesta.textContent = msj;
    }
}