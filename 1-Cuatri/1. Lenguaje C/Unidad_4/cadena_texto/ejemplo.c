#include <stdio.h>
#include <stdlib.h>

int main()
{
    //                0123456  -- 5 Elementos (A-F), el ultimo índice (6) tiene valor NULL
    char cadena[7] = "ABCDEF"; // Null indica en dónde termina

    /* Array de Caracteres / Cadena de Texto (string) */
    char vocales[] = {'a', 'e', 'i', 'o', 'u'};

    for (int i = 0; i < 5; i++)
    {
        printf("%c\n", vocales[i]);
    }

    // Preguntar al usuario
    char nombreUsuario[50];

    printf("Ingrese su nombre: \n");
    scanf("%s", nombreUsuario); // <- sin & // no permite ESPACIO

    // %s permite el almacenamiento de la cadena de texto
    // %c permite un caracter

    printf("El nombre ingresado fue: %s\n", nombreUsuario);


    /*     Almacenar 10 nombres: */

    //        [filas][caracteres]
    char nombres[10][50];
    // El primer corchete indica la cantidad de nombres que necesito almacenar.
    // El segundo corchete indica la longitud máxima de cada nombre,
    // es decir los 10 nombres ingresados deberán tener menos de 50 caracteres.
    for (int i = 0; i < 10; i++)
    {
        printf("Ingrese el nombre %d\n", i + 1);
        scanf("%s", &nombres[i]);
    }

    for (int i = 0; i < 10; i++)
    {
        printf("%s\n", nombres[i]);
    }

    return 0;
}