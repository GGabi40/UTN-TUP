#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>

/*
Escribe un programa que solicite al usuario una cadena de caracteres y luego imprima la
cadena invertida
*/

int main()
{
    char matriz[50];

    printf("Ingrese un texto: \n");
    fgets(matriz, sizeof(matriz), stdin);
    matriz[strcspn(matriz, "\n")] = '\0';

    for (int i = strlen(matriz)-1; i >= 0; i--)
    {
        printf("%c", matriz[i]);
    }

    printf("\n");

    return 0;
}