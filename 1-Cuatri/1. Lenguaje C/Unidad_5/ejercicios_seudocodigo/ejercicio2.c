#include <stdlib.h>
#include <stdio.h>
#include <string.h>

float suma(float numero1, float numero2)
{
    return numero1 + numero2;
}

int main()
{
    float numero1, numero2, resultado;

    printf("Ingrese un numero: \n");
    scanf("%f", &numero1);
    printf("Ingrese otro numero: \n");
    scanf("%f", &numero2);

    resultado = suma(numero1, numero2);

    printf("La suma es: %.2f", resultado);

    return 0;
}