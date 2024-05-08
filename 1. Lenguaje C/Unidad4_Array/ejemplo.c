#include <stdio.h>
#include <stdlib.h>

void main()
{
    //            0    1   2   3   4   5   --> índices
    int num[6] = {10, 20, 30, 40, 50, 60}; // 6 posiciones
    int x[] = {1, 2, 3}; /* declara e inicializa array de 3 elementos */
    char ch[4] = {'G', 'a', 'b', 'i'};

    printf("%s\n", ch);


    /* Solicitar al user Array */
    int numero[5];

    // Para i = 0, ir hasta 4
    for (int i = 0; i < 5; i++)
    {
        printf("Ingrese nro. %d \n", i + 1);
        scanf("%d", &numero[i]);
    }
    // mostrando elementos del arreglo
    for (int i = 0; i < 5; i++)
    {
        printf("Indice: %d \t Valor: %d \n", i, numero[i]);
    }


    /* Array bidimensional */
    int arreglo[5][5]; // 5 filas, 5 columnas
    int otroArreglo[3][2]; // 3 filas, 2 columnas


    /* Array de Caracteres / Cadena de Texto (string) */
    char vocales[] = {'a', 'e', 'i', 'o', 'u'};

    for (int i = 0; i < 5; i++) {
        printf("%c\n", vocales[i]);
    }


    char nombreUsuario[50];

    printf("Ingrese su nombre: \n");
    scanf("%s", nombreUsuario); // <- sin & // no permite ESPACIO

    printf("El nombre ingresado fue: %s\n", nombreUsuario);
}