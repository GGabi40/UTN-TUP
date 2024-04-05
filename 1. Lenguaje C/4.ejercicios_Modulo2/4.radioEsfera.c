#include <stdio.h>
#include <math.h>
#include <stdlib.h>

// Ingresar el radio de una esfera y mostrar el perímetro, el área y el volumen:

#define PI 3.141592

void main()
{
    double radio, perimetro, area, volumen;

    printf("Introduzca el radio de la esfera: \n");
    scanf("%lf", &radio);

    volumen = 4/3 * PI * pow(radio, 3);
    area = 4 * PI * pow(radio, 2);
    perimetro = 2 * PI * radio;

    printf("El área es: %.2lf, el volumen es: %.2lf y el perimetro: %.2lf.\n", area, volumen, perimetro);
}