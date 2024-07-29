#include <math.h>
#include <stdlib.h>
#include <stdio.h>

// El usuario debe poder ingresar los lados de un rectángulo y el programa calcula con
// esos datos la diagonal principal del rectángulo, superficie y perímetro. Mostrar al
// usuario los resultado:

void main()
{
    double lado_ancho, lado_alto, diagonal, superficie, perimetro;

    printf("\nIntroducir valor del lado ANCHO del rectángulo: \n");
    scanf("%lf", &lado_ancho);

    printf("\nIntroducir valor del ALTO del rectángulo: \n");
    scanf("%lf", &lado_alto);

    diagonal = sqrt( pow(lado_ancho, 2) + pow(lado_alto, 2) );
    superficie = lado_ancho * lado_alto;
    perimetro = 2 * (lado_ancho + lado_alto);

    printf("El valor de la diagonal es: %.2lf \n", diagonal);
    printf("El valor de la superficie es: %.2lf \n", superficie);
    printf("El valor de la perímetro es: %.2lf \n", perimetro);

    system("pause");
}