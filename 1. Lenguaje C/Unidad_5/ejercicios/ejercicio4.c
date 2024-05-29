#include <stdlib.h>
#include <stdio.h>
#include <math.h>

/* 
Crear una función que calcule el cubo de un número real (float).
El resultado deberá ser otro número real.
*/

float alCubo(float numero);

int main()
{
    float num, numCubo;

    printf("Ingrese un numero: \n");
    scanf("%f", &num);

    numCubo = alCubo(num);

    printf("El cubo de este numero es: %f\n", numCubo);

    return 0;
}

float alCubo(float numero)
{
    return numero * numero * numero;
}