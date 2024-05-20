#include <stdio.h>
#include <stdlib.h>

// Ingresar por pantalla dos números y mostrar su suma:

void main()
{
    int num1, num2;

    printf("Decime 2 números enteros: \n");
    scanf("%d",&num1);
    scanf("%d",&num2);

    printf("La suma de ambos es: %d\n", num1 + num2);
}