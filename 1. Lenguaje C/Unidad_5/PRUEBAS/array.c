#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void palabraF(char cadena[], int tam);

int main()
{
    char palabra[10];
    printf("Escriba una palabra:\n");
    fgets(palabra, sizeof(palabra), stdin);
    palabra[strcspn(palabra, "\n")] = '\0';

    printf("PRE FUNCION\nPalabra ingresada: %s\n", palabra);

    palabraF(palabra, 10);

    printf("POST FUNCION\nPalabra modificada: %s\n", palabra);
    return 0;
}

void palabraF(char cadena[], int tam)
{
    for(int i = 0; i < tam; i++)
    {
        if(cadena[i] == 'a' || cadena[i] == 'e')
        {
            cadena[i] = '3';
        }
    }
}