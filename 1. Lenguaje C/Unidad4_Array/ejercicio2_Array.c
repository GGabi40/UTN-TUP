#include <stdio.h>
#include <stdlib.h>

void main()
{
    int i, suma;
    int matriz[5];
    float promedio;

    suma = 0;

    for (i = 0; i < 5; i++) {
        printf("Ingrese un numero %d: \n", i+1);
        scanf("%d", &matriz[i]);
        suma = matriz[i] + suma;
    }

    promedio = suma / 5;

    printf("La suma es de: %d\n", suma);
    printf("El promedio es de: %.2f\n", promedio);
}