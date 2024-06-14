#include <stdlib.h>
#include <string.h>
#include <stdio.h>

int main()
{
    char palabra1[10], palabra2[10];
    printf("Ingrese la primera palabra: \n");
    fgets(palabra1, sizeof(palabra1), stdin);
    palabra1[strcspn(palabra1, "\n")] = '\0';
    printf("Ingrese la segunda palabra: \n");
    fgets(palabra2, sizeof(palabra2), stdin);
    palabra2[strcspn(palabra2, "\n")] = '\0';

    // Calcular longitud:
    int long1, long2;
    long1 = strlen(palabra1);
    long2 = strlen(palabra2);
    printf("La primera palabra tiene longitud: %d \n", long1);
    printf("La segunda palabra tiene longitud: %d \n", long2);

    // Comparar:
    if (strcmp(palabra1, palabra2) == 0)
    {
        printf("¡Son iguales! \n");
    }
    else
    {
        printf("¡Son distintas! \n");
    }

    // Concatenar:
    char concatenado[50];
    strcpy(concatenado, palabra1);
    strcat(concatenado, palabra2);
    printf("Las dos palabras concatenadas: %s\n", concatenado);

    // posición del 1er caracter distinto:
    for (int i = 0; i < long1; i++)
    {
        if (palabra1[i] != palabra2[i])
        {
            printf("La diferencia está en la posición %d\n", i);
            break;
        }
    }
    return 0;
}