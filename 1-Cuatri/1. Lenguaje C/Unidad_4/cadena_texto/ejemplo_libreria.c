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

    /* FUNCIONES CON NOMBRE COMPLETO 
    strcpy:
    Nombre completo: string copy
    Descripción: Copia una cadena de caracteres desde una fuente (src) a un destino (dest).
    Firma: char *strcpy(char *dest, const char *src);
    Argumentos:
        1o -> donde copiar la cadena (buffer de destino)
        2o -> cadena que quiero copiar (cadena fuente)

fgets:
    Nombre completo: file get string
    Descripción: Lee una línea de una entrada (normalmente de un archivo o stdin) hasta 
    un máximo de n-1 caracteres o hasta encontrar un salto de línea (\n), lo que ocurra primero. 
    Almacena la línea en un buffer y asegura que la cadena resultante esté terminada en nulo (\0).
    Firma: char *fgets(char *str, int n, FILE *stream);
    Argumentos:
        1o -> donde almacenar la cadena leída (buffer)
        2o -> cantidad máxima de caracteres a leer (incluyendo el carácter nulo)
        3o -> de dónde leer (normalmente stdin para entrada de teclado)

strcspn:
    Nombre completo: string complement span
    Descripción: Calcula la longitud del segmento inicial de una cadena 
    que no contiene ninguno de los caracteres presentes en otra cadena dada.
    Firma: size_t strcspn(const char *str1, const char *str2);
    Argumentos:
        1o -> cadena en la que buscar
        2o -> caracteres a buscar (para detenerse)

strcat:
    Nombre completo: string concatenate
    Descripción: Añade (concatena) la cadena fuente (src) al final de la cadena destino (dest). La cadena destino debe tener suficiente espacio para contener ambas cadenas.
    Firma: char *strcat(char *dest, const char *src);
    Argumentos:
        1o -> cadena de destino (donde se añadirá)
        2o -> cadena que quiero añadir (cadena fuente)

    */

    return 0;
}