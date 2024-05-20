#include <stdio.h>
#include <stdlib.h>

// Ingresar el tiempo trabajado por un contador y considerando que el valor de la hora es
// de 800 pesos, calcular su sueldo e imprimirlo:

void main()
{
    double valorDeLaHora, sueldo;
    float horasTrabajadas;
    double valorDeLaHora, sueldo;

    valorDeLaHora = 800.00;

    printf("\nIngresá la cantidad de horas trabajadas: ");
    scanf("%f", &horasTrabajadas);

    sueldo = horasTrabajadas * valorDeLaHora;

    printf("Al haber trabajado %.2f horas, el sueldo correspondiente es de: $ %2.lf. \n", horasTrabajadas, sueldo);
}