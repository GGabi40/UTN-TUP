#include <stdio.h>
#include <stdlib.h>

/* 
1. Realice un pseudocódigo que permita sumar los elementos de dos arreglos y 
guarde el resultado en otro arreglo. Deberá imprimir el arreglo resultante,
el tamaño del arreglo será introducido por el usuario, se debe comprobar que
el tamaño del arreglo sea válido, es decir, no permitir valores negativos y
que sea mayor que 2.
*/

int main()
{
    int elementos, i, j;

    do
    {
        printf("Ingrese la cantidad de elementos que desea: \n");
        scanf("%d", &elementos);
    } while (elementos <= 2);

    int matriz[elementos];
    int matriz_dos[elementos];
    int matriz_resultado[elementos];

    for (i = 0; i < elementos; i++)
    {
        printf("Ingrese el elemento %d del PRIMER arreglo: \n", i+1);
        scanf("%d", &matriz[i]);
    }

    for (j = 0; j < elementos; j++)
    {
        printf("Ingrese el elemento %d del SEGUNDO arreglo: \n", j+1);
        scanf("%d", &matriz_dos[j]);
    }

    for (i = 0; i < elementos; i++)
    {
		matriz_resultado[i] = matriz[i] + matriz_dos[i];
    }

    for (i = 0; i < elementos; i++)
    {
		printf("%d\n", matriz_resultado[i]);
    }

    return 0;
}