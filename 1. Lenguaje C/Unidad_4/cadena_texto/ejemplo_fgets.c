#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    // para no leer ENTER
    char cadena[100];

    printf("Ingrese una cadena de texto: ");
    fgets(cadena, sizeof(cadena), stdin);

    // Eliminar el salto de línea al final de la cadena
    cadena[strcspn(cadena, "\n")] = '\0';

    // strcspn: encuentra dentro de cadena la aparición de "\n" y devuelve
    // su posición

    printf("La cadena ingresada es: %s\n", cadena);

    return 0;
}