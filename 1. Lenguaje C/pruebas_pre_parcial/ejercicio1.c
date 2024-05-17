#include <stdio.h>
#include <stdlib.h>

int main()
{
    int cant_alumnos, cant_parciales;
    int legajo, legajo_mayor;
    float promedio, promedio_mayor, acc_notas, nota;

    cant_alumnos = 4;
    cant_parciales = 4;
    acc_notas = 0;

    for (int i = 0; i < cant_alumnos; i++)
    {
        acc_notas = 0;
        printf("Ingrese el legajo del estudiante %i\n", i+1);
        scanf("%i", &legajo);

        for(int j = 0; j < cant_parciales; j++)
        {
            printf("Nota %i del estudiante %i\n", j+1, i+1);
            scanf("%f", &nota);
            acc_notas += nota;
        }

        promedio = acc_notas / cant_parciales;

        if (i == 0) {
            promedio_mayor = promedio;
            legajo_mayor = legajo;
        } else if (promedio > promedio_mayor)
        {
            promedio_mayor = promedio;
            legajo_mayor = legajo;
        }
    }

    printf("El mayor promedio fue de: %i\n", legajo_mayor);
    printf("Su promedio fue de: %.2f\n", promedio_mayor);

    return 0;
}