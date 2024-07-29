#include <stdio.h>
#include <stdlib.h>

void main()
{
    int i, j, valor;
    int matriz[5][5];

    for (i = 0; i < 5; i++) {
        for (j = 0; j < 5; j++) {
            printf("Ingrese un número: %d, %d \n", i, j);
            scanf("%d", &matriz[i][j]);
        }
    }

    for (i = 0; i < 5; i++) {
        for (j = 0; j < 5; j++) {
            printf("%d\t", matriz[i][j]);
        }
        printf("\n");
    }

    valor = matriz[3][2];
    printf("Valor es: %d\n", valor);
}