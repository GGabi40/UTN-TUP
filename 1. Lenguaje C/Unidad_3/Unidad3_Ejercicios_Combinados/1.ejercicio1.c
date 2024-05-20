#include <stdio.h>
#include <stdlib.h>

void main()
{
    int edadAlumno;
    int cantidad_alumnos_mayores;

    cantidad_alumnos_mayores = 0;

    for (int i = 0; i <= 29; i++) {
        printf("Ingrese la edad del alumno: %d\n", i+1);
        scanf("%d", &edadAlumno);

        if (edadAlumno > 21) {
            cantidad_alumnos_mayores += 1;
        }
    }

    printf("La cantidad de alumnos que superan los 21 años es: %d\n", cantidad_alumnos_mayores);
}