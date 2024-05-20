#include <stdio.h>
#include <stdlib.h>

void main()
{
    int contra, contra_G, usuario, usuario_G, contador;

    contador = 1;
    usuario_G = 123;
    contra_G = 456;

    while ((usuario != usuario_G || contra != contra_G) && contador <= 3) {
        printf("Intento: %d\n", contador);

        printf("Ingrese usuario: \n");
        scanf("%d", &usuario);
        printf("Ingrese contraseña: \n");
        scanf("%d", &contra);

        contador++;
    }

    if ((usuario == usuario_G && contra == contra_G) || contador <= 3) {
        contador = 0;
        printf("\n");
        printf("Bienvenido/a!\n");
    } else {
        printf("\n");
        printf("Agotó la cantidad de intentos.\n");
    }

}