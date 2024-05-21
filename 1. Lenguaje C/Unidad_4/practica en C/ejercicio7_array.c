#include <stdio.h>

int main()
{
    // Declaración de variables
    float calificaciones[5][3];
    float promedioAlumno[5] = {0};
    float promedioGeneral = 0;
    // Lectura de calificaciones
    for (int i = 0; i < 5; i++)
    {
        printf("Ingrese las 3 calificaciones del alumno %d:\n", i + 1);
        for (int j = 0; j < 3; j++)
        {
            printf("El valor debe estar entre 0 y 10.\n");
            do {
                scanf("%f", &calificaciones[i][j]);
            } while(calificaciones[i][j] < 0 || calificaciones[i][j] > 10);
            promedioAlumno[i] += calificaciones[i][j];
        }
        promedioAlumno[i] /= 3;
        promedioGeneral += promedioAlumno[i];
    }
    // Cálculo del promedio general
    promedioGeneral /= 5;

    // Mostrar resultados
    printf("\nPromedio por alumno:\n");
    for (int i = 0; i < 5; i++)
    {
        printf("Alumno %d: %.2f\n", i + 1, promedioAlumno[i]);
    }
    printf("\nPromedio general: %.2f\n", promedioGeneral);

    return 0;
}