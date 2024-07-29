#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>

/* 
Escribe un programa que solicite al usuario una cadena de caracteres y luego cuente el
número de vocales que contiene.
*/

int main()
{
    char matriz[50];
    int contador;

    contador=0;

    printf("Ingrese una cadena: \n");
    fgets(matriz, sizeof(matriz), stdin);
    matriz[strcspn(matriz, "\n")] = '\0';

    for(int i = 0; i<strlen(matriz); i++)
    {
        if(tolower(matriz[i]) == 'a' || 
        tolower(matriz[i]) == 'e' || 
        tolower(matriz[i]) == 'i' || 
        tolower(matriz[i]) == 'o' || 
        tolower(matriz[i]) == 'u')
        {
            contador++;
        }
    }

    printf("La cantidad de vocales es: %d\n", contador);
    return 0;
}