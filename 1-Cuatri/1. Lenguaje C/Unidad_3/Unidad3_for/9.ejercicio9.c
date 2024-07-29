#include <stdio.h>
#include <stdlib.h>

void main()
{
    int i, j;

    printf("La tabla a de multiplicar: ");

// for para los numeros:
    for(i = 1; i <= 9; i++) {
        printf("Tabla de multiplicación del %d\n", i);
        // for para la tabla
        for(j = 0; j <= 10; j++) {
            printf("%d x %d = %d\n", i, j, i * j);
        }
    }
}