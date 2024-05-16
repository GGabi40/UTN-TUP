#include <stdio.h>
#include <stdlib.h>

int main()
{
    int numero_vendedores;
    float total_vendedor, total_tienda;
    do
    {
        printf("Ingrese la cantidad de vendedores: \n");
        scanf("%d", &numero_vendedores);
    } while (numero_vendedores < 1);

    float matriz[numero_vendedores][5];

    // filas
    for (int i = 0; i < numero_vendedores; i++)
    {
        total_vendedor = 0;
        printf("VENDEDOR %d", i + 1);
        // columnas
        for (int j = 0; j < 5; j++)
        {
            printf("Ingrese su ingreso obtenido por el producto: %d\n", j + 1);
            scanf("%f", &matriz[i][j]);
            total_tienda += matriz[i][j];
            total_vendedor += matriz[i][j];
        }
        printf("El total del vendedor %d es de: %.2f\n", i + 1, total_vendedor);
    }
    
    printf("El total de la tienda es: %.2f\n", total_tienda);
    return 0;
}