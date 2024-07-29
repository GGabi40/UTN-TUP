#include <stdlib.h>
#include <stdio.h>
#include <string.h>

/* 
Escribe un programa que pida tres cadenas al usuario y muestre sus longitudes
(número de letras).
*/

int main()
{
    char matriz[3][50];
    int i;
    
    for(i = 0; i<3; i++)
    {
        printf("Escriba la cadena %d: \n", i+1);
        fgets(matriz[i], sizeof(matriz[i]), stdin); // lee cadena i
        matriz[i][strcspn(matriz[i], "\n")] = '\0'; // permite ENTER y ESPACIO
    }

    for(i = 0; i<3; i++) {
        printf("La longitud de cada cadena es: \n");
        printf("%ld \n", strlen(matriz[i])); // ld : long entero (long  int)
    }

    return 0;
}