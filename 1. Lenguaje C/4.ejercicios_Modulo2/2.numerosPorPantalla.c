#include <stdio.h>
#include <stdlib.h>

// Ingresar un numero por pantalla y mostrar el numero anterior y el posterior:

void main()
{
    int num, numAnterior, numPosterior;

    printf("Decime un número entero: \n");
    scanf("%d",&num);

    printf("El número anterior es: %d\n", --num);
    printf("El número posterior es: %d\n", ++num);
}