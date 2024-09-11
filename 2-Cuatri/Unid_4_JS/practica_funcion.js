function suma(a, b) {
    console.log("El resultado de la suma es: ", a+b);
}

suma(10, 5);

// -------

function factorial(num) {
    let acc = 1;

    for(let i = 1; i<= num; i++) {
        acc = acc * i;
    }

    console.log("El factorial de ", num, "! es = ", acc);
}

factorial(4);

// -------

function contarVocal(texto) {
    let longitud = texto.length;
    console.log(longitud);
    let contador = 0;
    for (let i = 0; i <= longitud; i++) {
        if (texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u') {
            contador++;
        }
    }

    if(contador > 1) {
        console.log("Hay ", contador, " vocales.");
    } else {
        console.log("Hay ", contador, " vocal.");
    }
}

contarVocal("hola");

// -------


function cualMayor(frase) {
    let cadaPalabra;
    let mayorPalabra;
    let numMayorPalabra;

    cadaPalabra = frase.split(" ");
    let cuantasPalabras = cadaPalabra.length;

    for(let i = 0; i < cuantasPalabras; i++) {

        if (i == 0) {
            mayorPalabra = cadaPalabra[i];
            numMayorPalabra = cadaPalabra[i].length;
        } else if (numMayorPalabra < cadaPalabra[i].length) {
            mayorPalabra = cadaPalabra[i];
            numMayorPalabra = cadaPalabra[i].length;
        }
    }

    console.log(`La mayor palabra de la oración es: ${mayorPalabra}. Tiene: ${numMayorPalabra} letras.`);
}

cualMayor("Hola que tal");