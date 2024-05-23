#include <stdlib.h>
#include <stdio.h>
#include <string.h>

/* 
Ingresar por consola 10 nombres de alumnos en un array y sus apellidos en otro,
concatenar de la forma "nombre apellido" para cada uno, y mostrar por consola
*/

int main()
{
    char nombre[10][50], apellidos[10][50], concatenado[10][100];

    for (int i = 0; i<10; i++)
    {
        printf("Ingrese nombre del alumno %d\n", i+1);
        fgets(nombre[i], sizeof(nombre[i]), stdin);
        nombre[i][strcspn(nombre[i], "\n")] = '\0'; // borra el enter 

        printf("Ingrese apellido del alumno %d\n", i+1);
        fgets(apellidos[i], sizeof(apellidos[i]), stdin);
        apellidos[i][strcspn(apellidos[i], "\n")] = '\0';

        // concatenarlos:
        //     "Juan" + " "
        strcat(nombre[i], " ");
        //      "Juan" + " " + "Perez"
        strcat(nombre[i], apellidos[i]);

        // strcpy(concatenado[i], nombre[i]);
    }

    printf("Nombres: \n");
    for (int i = 0; i<10; i++)
    {
        printf("Alumno %d: %s\n", i+1, nombre[i]);
    }

    return 0;
}