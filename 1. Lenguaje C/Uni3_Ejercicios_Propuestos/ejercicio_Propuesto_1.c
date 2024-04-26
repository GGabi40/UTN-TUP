// Escribir un programa que solicite ingresar 10 notas de alumnos 
// y nos informe cuántos tienen notas mayores o iguales a 7 y cuántos menores.

#include <stdio.h>
#include <stdlib.h>

void main()
{
    float notas_alumnos;
    int mayores, menores, i;

    mayores = 0;
    menores = 0;
    i = 1;

    while(i <= 10) {
        printf("Ingrese la nota del alumno %d\n", i);
        scanf("%f", &notas_alumnos);

        if (notas_alumnos >= 7) {
            mayores++;
        } else {
            menores++;
        }

        i++;
    }

    printf("La cantidad de alumnos con nota mayor o igual a 7: %d\n", mayores);
    printf("La cantidad de alumnos con nota menor a 7: %d\n", menores);
}