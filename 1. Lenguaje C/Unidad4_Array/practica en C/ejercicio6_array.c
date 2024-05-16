#include <stdlib.h>
#include <stdio.h>

int main()
{
    float facturaciones_mensuales[6]; // rango de [0, 5]
    float facturacion_total, facturacion_promedio, facturacion_min, facturacion_max;
    int i;

    facturacion_total = 0;
    facturacion_promedio = 0;
    facturacion_max = 0;

    // cargar arreglo
    for (i = 0; i < 6; i++)
    {
        do
        {
            printf("Ingrese la facturación del mes %d: \n", i + 1);
            scanf("%f", &facturaciones_mensuales[i]);

            if (facturaciones_mensuales[i] < 0)
            {
                printf("Error. Ingrese un valor mayor que cero.");
            }
        } while (facturaciones_mensuales[i] < 0);
    }

    facturacion_min = facturaciones_mensuales[0]; // inicializo con un elemento aleatorio del arreglo
    // dsp verifico si es el menor.

    for (i = 0; i < 6; i++)
    {
        facturacion_total = facturacion_total + facturaciones_mensuales[i];

        // buscar maximo y mínimo
        if (facturaciones_mensuales[i] > facturacion_max)
        {
            facturacion_max = facturaciones_mensuales[i];
        }

        if (facturaciones_mensuales[i] < facturacion_min)
        {
            facturacion_min = facturaciones_mensuales[i];
        }
    }

    facturacion_promedio = facturacion_total / 6;

    printf("La facturación total para los 6 meses es de: %.2f\n", facturacion_total);
    printf("La facturación maxima es de: %.2f\n", facturacion_max);
    printf("La facturación mínima es de: %.2f\n", facturacion_min);
    printf("La facturación promedio es de: %.2f\n", facturacion_promedio);

    return 0;
}