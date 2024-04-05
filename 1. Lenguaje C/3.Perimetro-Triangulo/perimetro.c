#include <stdio.h>
#include <stdlib.h>

void main()
{
    int lado1, lado2, lado3, perimetro;

    printf("Decime el primer lado del triángulo: \n");
    scanf("%d",&lado1);

    printf("Decime el otro lado del triángulo: \n");
    scanf("%d",&lado2);

    printf("Decime el último lado del triángulo: \n");
    scanf("%d",&lado3);

    perimetro = lado1 + lado2 + lado3;

    printf("El perímetro del triángulo es: %d\n", perimetro);
}