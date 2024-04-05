#include <stdio.h>
#include <math.h>
#include <stdlib.h>

// Solicitar ingresar dos lados de un triángulo rectángulo y calcular: la hipotenusa, el
// perímetro, la superficie. Imprima los resultados de las operaciones solicitadas:

void main()
{
    double cateto1, cateto2, hipotenusa, perimetro, area;

    printf("\nIntroduzca los lados del triángulo: \n");
    printf("Primer Cateto: \n");
    scanf("%lf", &cateto1);
    printf("Segundo Cateto: \n");
    scanf("%lf", &cateto2);

    hipotenusa = pow(cateto1, 2) + pow(cateto2, 2);
    hipotenusa = sqrt(hipotenusa);

    area = (cateto1 * cateto2) / 2;
    perimetro = cateto1 + cateto2 + hipotenusa;

    printf("La hipotenusa es de: %.2lf. El área es %.2lf y el perímetro %.2lf.\n", hipotenusa, area, perimetro);

    system("pause");
}