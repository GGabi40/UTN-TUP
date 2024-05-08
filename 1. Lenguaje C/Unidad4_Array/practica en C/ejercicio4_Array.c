#include <stdio.h>
#include <stdlib.h>

int main()
{
    int matriz[6] = {10, 20, 5, 15, 30, 20};
    int mayor_numero = matriz[0];
    int suma = 0;
    int contador = 0;
    int i;

    for(i = 0; i < 6; i++) {
        printf("ÍNDICE: %d -> VALOR: %d\n", i, matriz[i]);
    }


    return 0;
}