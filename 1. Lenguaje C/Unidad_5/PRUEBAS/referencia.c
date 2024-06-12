#include <stdio.h>
#include <stdlib.h>

int suma(int *a, int *b);

int main()
{   
    int a, b;
    int resultado;

    a = 10;
    b = 20;
    printf("Valores de a y b: %d, %d\n", a, b);

    resultado = suma(&a, &b);
    printf("La suma de A y B = %d\n", resultado);
    
    return 0;
}

int suma(int *a, int *b)
{
    *a = 30;
    *b = 30;
    printf("Valores de a y b dentro de la FUNCIÓN POR REFERENCIA: %d, %d\n", *a, *b);
    int resultado = *a + *b;
    return resultado;
}