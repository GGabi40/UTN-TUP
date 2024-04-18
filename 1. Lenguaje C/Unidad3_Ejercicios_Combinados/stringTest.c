#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void main()
{
    char string;
    char string2;

    printf("Decime una string: \n");
    scanf(" %c", &string);

    printf("Decime otra string: \n");
    scanf(" %c", &string2);

    printf("Las dos strings son: %c %c\n", string, string2);

// Si son iguales es igual a 0
    if (string == string2) {
        printf("Las dos strings son iguales! \n");
    } else {
        printf("No son iguales! \n");
    }
}