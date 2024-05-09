#include <stdio.h>
#include <stdlib.h>

// Realice un algoritmo que lea en un arreglo las marcas 
// obtenidas por 10 corredores en una carrera e imprimir 
// cuántos tienen una marca mayor, cuántos tienen una 
// marca menor que el promedio y el promedio.

int main()
{
    int marcasCorredores[11], mayorMarca, menorMarca, acc, i;
    float promedio;

    acc = 0;

    for (i = 0; i < 10; i++) {
        printf("Ingrese la marca del corredor %d\n.", i+1);
        scanf("%d", &marcasCorredores[i]);

        acc += marcasCorredores[i];

        if (i == 0) {
            mayorMarca = marcasCorredores[i];
            menorMarca = marcasCorredores[i];
        }
        if (mayorMarca < marcasCorredores[i]) {
            mayorMarca = marcasCorredores[i];
        } 
        if (menorMarca > marcasCorredores[i]) {
            menorMarca = marcasCorredores[i];
        }
    }

    promedio = acc / 10;
    printf("La mayor marca fue de: %d\n", mayorMarca);
    printf("La menor marca fue de: %d\n", menorMarca);
    printf("El promedio general fue de: %.2f\n", promedio);
    return 0;
}