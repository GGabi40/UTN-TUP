// Leer por consola notas hasta que el usuario lo indique e informar su suma y promedio.

#include <stdio.h>
#include <stdlib.h>

void main()
{
    char flag;
    float notas, promedio, suma;
    int contador = 0;
    
    do {
        printf("Ingrese nota: \n");
        scanf("%f", &notas);

        suma += notas;
        contador++;

        printf("Quiere seguir ingresando notas? (S / N)\n");
        scanf(" %c", &flag);
    } while (flag == 's' || flag == 'S');

    promedio = suma / contador;

    printf("La cantidad de notas ingresadas es: %d\n", contador);
    printf("La suma de notas es: %.2f\n", suma);
    printf("El promedio es: %.2f\n", promedio);
}