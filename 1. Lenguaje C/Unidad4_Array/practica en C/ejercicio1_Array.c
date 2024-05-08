#include <stdio.h>
#include <stdlib.h>

void main()
{
    int i;
    int matriz[5] = { 10, 20, 30, 40, 50 };

    for(i = 4; i >= 0; i--) {

        // i  --->  valor
        printf("ÍNDICE: %d -> VALOR: %d\n", i, matriz[i]);
    }
}