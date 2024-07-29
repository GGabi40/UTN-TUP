#include <stdio.h>
#include <stdlib.h>

void main()
{
    int i, suma;
    int matriz[5];

    suma = 0;

    for (i = 0; i < 5; i++) {
        printf("Ingrese un numero %d: \n", i+1);
        scanf("%d", &matriz[i]);
        suma = matriz[i] + suma;
    }

    printf("La suma es: %d\n", suma);
}