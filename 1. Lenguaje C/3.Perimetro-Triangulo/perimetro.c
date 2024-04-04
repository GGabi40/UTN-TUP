#include <stdio.h>
#include <stdlib.h>

void main()
{
    int perimetro;
    int lado1;
    int lado2;
    int lado3;

    printf("Decime el lado 1 triangulo:\n");
    scanf("%d", &lado1);
    printf("Decime el lado 2 triangulo:\n");
    scanf("%d", &lado2);
    printf("Decime el lado 3 triangulo:\n");
    scanf("%d", &lado3);

    perimetro = lado1 + lado2 + lado3;

    printf("El perimetro del triangulo con lados %d, %d y %d es: %d\n", lado1, lado2, lado3, perimetro);

    system("pause");
}