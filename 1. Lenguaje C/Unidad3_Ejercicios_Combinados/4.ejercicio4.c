#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void main()
{
    int i, num_Empleado_marketing, horas, cant_Horas_marketing;
    int total_Horas_man, total_Horas_Tarde;
    char turno;

    printf("DEPARTAMENTO MARKETING:\n");
    printf("Ingrese la cantidad de trabajadores de este DPTO:\n");
    scanf("%d", &num_Empleado_marketing);

    for (i = 0; i < num_Empleado_marketing; i++) {
        printf("Ingrese la cantidad de horas trabajadas: %d\n", i);
        scanf("%d", &horas);

        printf("Ingrese su turno? (M / T) %d\n", i);
        scanf(" %c", &turno);

        if (turno == 'M' || turno == 'm') {
            total_Horas_man += horas;
        } else if (turno == 'T' || turno == 't') {
            total_Horas_Tarde += horas;
        }

        cant_Horas_marketing = total_Horas_man + total_Horas_Tarde;
    }

    printf("\n");
    printf("El total de horas trabajadas en marketing es: %d", cant_Horas_marketing);
    printf("El total de horas trabajadas en la mañana es: %d", total_Horas_man);
    printf("El total de horas trabajadas en la tarde es: %d", total_Horas_Tarde);
}