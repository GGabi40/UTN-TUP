#include <stdio.h>
#include <stdlib.h>

// Ingresar por pantalla 5 números y mostrar el promedio:

void main()
{
    int promedio, nota1, nota2, nota3, nota4, nota5;

    printf("Ingresá 5 notas: \n");
    printf("Primera nota: \n");
    scanf("%d",&nota1);
    printf("Segunda nota: \n");
    scanf("%d",&nota2);
    printf("Tercera nota: \n");
    scanf("%d",&nota3);
    printf("Cuarta nota: \n");
    scanf("%d",&nota4);
    printf("Quinta nota: \n");
    scanf("%d",&nota5);

    promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

    printf("El promedio es de: %d\n", promedio);
}