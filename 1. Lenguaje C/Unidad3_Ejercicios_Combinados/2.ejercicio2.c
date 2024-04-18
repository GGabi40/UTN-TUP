#include <stdio.h>
#include <stdlib.h>

void main()
{
    int cantAlumnos;
    float notaParcial, promedioParciales, sumaNotas;

    cantAlumnos = 5;
    sumaNotas = 0;

    for(int i = 1; i <= cantAlumnos; i++) {
        printf("Ingrese la nota del alumno %d\n", i);
        scanf("%f", &notaParcial);

        sumaNotas = sumaNotas + notaParcial;
    }

    promedioParciales = sumaNotas / cantAlumnos;

    printf("El promedio de notas de los %d alumnos es: %.2f\n", cantAlumnos, promedioParciales);
}