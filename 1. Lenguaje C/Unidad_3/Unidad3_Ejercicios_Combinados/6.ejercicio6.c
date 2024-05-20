#include <stdio.h>
#include <stdlib.h>
void main()
{
    int cant_Estudiantes, cant_ActivPorAlumno, i, mayorCantidadActividades, acumulador, legajo, mayor_activ_legajo;
    acumulador = 0;
    printf("Ingrese la cantidad de alumnos: \n");
    scanf("%d", &cant_Estudiantes);

    for (i = 1; i < cant_Estudiantes; i++)
    {
        printf("Legajo del estudiante %d\n", i);
        scanf("%d", &legajo);
        printf("Ingrese cantidad de actividades en la que participa: \n");
        scanf("%d", &cant_ActivPorAlumno);
        
        if (i == 1)
        {
            mayorCantidadActividades = cant_ActivPorAlumno;
            mayor_activ_legajo = legajo;
        }
        else if (cant_ActivPorAlumno > mayorCantidadActividades)
        {
            mayorCantidadActividades = cant_ActivPorAlumno;
            mayor_activ_legajo = legajo;
        }
        if (cant_ActivPorAlumno > 5)
        {
            acumulador = acumulador + 1;
        }
    }
    printf("Legajo con más actividades: %d", mayor_activ_legajo);
    printf("\n");
    printf("La cantidad de alumnos que participó en más de 5 actividades es: %d", acumulador);
}