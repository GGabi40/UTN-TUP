#include <stdio.h>
#include <stdlib.h>

void cambio(int *a, int *b);

int main()
{
    int p = 500, q = 10;
    printf("PRE FUNCION\nValor de p = %d // Valor de q = %d\n", p, q);

    cambio(&p, &q);

    printf("POST FUNCION\nValor de p = %d // Valor de q = %d\n", p, q);
}

void cambio (int *a, int *b)
{
    int aux = *a;
    *a = *b;
    *b = aux;
}