#include <stdio.h>
#include <stdlib.h>

void main()
{
    int num1;
    int num2;
    int resultado;

    printf("Ingrese un numero entero \n");
    scanf("%d", &num1);

    printf("Ingrese otro numero entero \n");
    scanf("%d", &num2);

    resultado = num1 + num2;
    printf("el resultado es igual a: %d\n", resultado);

    system("pause");
}