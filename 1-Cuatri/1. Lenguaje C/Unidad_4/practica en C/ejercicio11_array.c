#include <stdlib.h>
#include <stdio.h>

int main()
{
    float numeros[4][3]; // 4 filas y 3 columnas
    // rango para filas: [0, 3] (4-1)
    // rango para filas: [0, 2] (3-1)

    float total;

    // llenar matriz bidimensional
    // filas = i
    // columnas = j

    // columnas
    for (int j = 0; j <= 2; j++)
    {
        // filas
        for (int i = 0; i <= 3; i++)
        {
            printf("Ingrese un numero: \n");
            scanf("%f", &numeros[i][j]);
            total += numeros[i][j];
        }
    }

    printf("%2.f\n", total);

    return 0;
}