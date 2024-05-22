#include <stdio.h>
#include <stdlib.h>
#include <string.h> // CADENA PARA MANIPULAR CADENA DE TEXTO

int main()
{
    // Función strcpy: strcpy(arg1, arg2) Copia arg2 en arg1

    char nombre1[50];
    // nombre = "miNombre"; -> ¡NO ES POSIBLE!
    strcpy(nombre1, "miNombre"); // manera correcta de copiar una cadena de texto

    /*
    Si nombre es más largo que la cantidad permitida, puede guardar memoria demás,
    o saltar error. Hay que verificar que siempre haya suficiente espacio.
    */



    // Función strlen: strlen(arg1)
        // Devuelve la longitud del texto representado por arg1.



    // Función strcat: strcat(arg1, arg2)
        // Concatena las cadenas representadas por arg1 y arg2

    char nombre[50];
    char apellido[] = {"Baptista"};

    strcpy(nombre, "Gabriela");
    strcat(nombre, " ");
    strcat(nombre, apellido);

    printf("%s\n", nombre);


    // Función strcmp: strcmp(arg1, arg2)
        // Devuelve 0 si las cadenas representadas por arg1 y arg2 son iguales, un valor
        // menor que cero si arg1 precede alfabéticamente a arg2 o un valor mayor que
        // cero en caso contrario.

    // if(nombre == "ejemploNombre")  --> NO ES CORRECTO
    if (strcmp(nombre, "ejemploNombre") == 0)
    {
        /* 
        La comparación se realiza carácter por carácter, hasta encontrar un carácter
        diferente o el final de alguna de las cadenas. La comparación es sensible a
        mayúsculas y minúsculas
        */
    }


    return 0;
}