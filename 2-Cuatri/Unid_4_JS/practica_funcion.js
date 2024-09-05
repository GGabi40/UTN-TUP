function suma(a, b) {
    console.log("El resultado de la suma es: ", a+b);
}

suma(10, 5);

function factorial(num) {
    let acc = 1;

    for(let i = 1; i<= num; i++) {
        acc = acc * i;
    }

    console.log("El factorial de ", num, "! es = ", acc);
}

factorial(4);

function contarVocal(texto) {
    let longitud = texto.length;
    console.log(longitud);
    let contador = 0;
    for (let i = 0; i <= longitud; i++) {
        if (texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u') {
            contador++;
        }
    }

    console.log(contador);
}

contarVocal("hola");

function cualMayor(frase) {
    let longitudFrase = frase.length;
    let cadaPalabra;

    for(let i = 0; i <= longitudFrase; i++) {
        cadaPalabra = frase.split(" ");
    }

    let longitudCadaPalabra = cadaPalabra.length;

}

cualMayor("Hola que tal");