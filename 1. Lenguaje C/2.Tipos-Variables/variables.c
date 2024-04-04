/*
%d - Para variables de tipo int (entero).
%c - Para variables de tipo char (carácter).
%f - Para variables de tipo float.
%lf - Para variables de tipo double.
Estos son los formatos estándar que se utilizan para imprimir y escanear diferentes tipos de variables en C.
*/

#include <stdio.h>
#include <stdlib.h>

void main()
{
    int enteroEscaneado;
    char caracterEscaneado;
    float flotanteEscaneado;
    double dobleEscaneado;

    int entero = 10;
    char caracter = 'A';
    float flotante = 3.14159;
    double doble = 1234.5678;

    // Ejemplo de impresión usando printf
    printf("Entero: %d\n", entero);
    printf("Caracter: %c\n", caracter);
    printf("Flotante: %f\n", flotante);
    printf("Doble: %lf\n", doble);

    printf("\n"); // imprime en la consola sólo un salto de línea (enter)
// Ejemplo de escaneo usando scanf
    printf("Ingrese un entero: ");
    scanf("%d", &enteroEscaneado);
    printf("Entero escaneado: %d\n", enteroEscaneado);

    printf("Ingrese un caracter: ");
    scanf(" %c", &caracterEscaneado); //notar el ESPACIO antes de %c
    printf("Caracter escaneado: %c\n", caracterEscaneado);

    printf("Ingrese un flotante: ");
    scanf("%f", &flotanteEscaneado);
    printf("Flotante escaneado: %f\n", flotanteEscaneado);

    printf("Ingrese un double: ");
    scanf("%lf", &dobleEscaneado);
    printf("Doble escaneado: %lf\n", dobleEscaneado);

    system("pause");
}