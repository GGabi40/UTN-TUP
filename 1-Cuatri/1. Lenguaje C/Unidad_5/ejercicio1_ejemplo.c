#include <stdlib.h>
#include <stdio.h>

/*
Escriba un programa que pida ingresar un número y a continuación
escriba en la consola si el mismo es par o impar. Para ello desarrollar
una función llamada esPar que reciba un entero y retorne un 1 si el
número es par y un 0 si el número no es par.
*/

int esPar(int numero);

int main()
{
    int num1;

    printf("Ingrese un numero: \n");
    scanf("%i", &num1);

    int resultado = esPar(num1);

    if (resultado == 1)
    {
        printf("El numero es par.\n");
    }
    else
    {
        printf("El numero es impar.\n");
    }

    return 0;
}

// esta funcion recibe un entero y retorne un 1 si el número es par y un 0 si el número es impar
int esPar(int numero)
{
    int resultado = 0;

    if (resultado % 2 == 0)
    {
        resultado = 1;
    }

    return resultado;
}