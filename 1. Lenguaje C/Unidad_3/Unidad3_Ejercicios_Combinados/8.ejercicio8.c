#include <stdio.h>
#include <stdlib.h>

void main()
{
    int num_corredor, num_vuelta, cant_corredores, mejor_corredor = 0;
    float tiempo_vuelta, promedio_tiempo_vuelta, promedio_general = 0, mejor_tiempo = 0;

    printf("Ingrese la cantidad de corredores:\n");
    scanf("%d", &cant_corredores);

    // Por vuelta
    for (num_vuelta = 1; num_vuelta <= 3; num_vuelta++)
    {
        printf("\nVuelta %d\n", num_vuelta);
        promedio_tiempo_vuelta = 0; // Reiniciar el promedio para cada vuelta

        // Por concursantes
        for (int j = 1; j <= cant_corredores; j++)
        {
            printf("Ingrese el número de corredor:\n");

            // Entero entre 2000 y 3000
            do
            {
                scanf("%d", &num_corredor);

                if (num_corredor < 2000 || num_corredor > 3000)
                {
                    printf("El número de corredor debe estar entre 2000 y 3000.\n");
                };
            } while (num_corredor < 2000 || num_corredor > 3000);

            // tiempo debe ser mayor q 0
            do
            {
                printf("Ingrese la marca del corredor %d para la vuelta %d:", j, num_vuelta);
                scanf("%f", &tiempo_vuelta);

                if (tiempo_vuelta < 0)
                {
                    printf("La marca debe ser un número entero positivo.");
                };
            } while (tiempo_vuelta < 0);

            promedio_tiempo_vuelta += tiempo_vuelta;
            promedio_general += tiempo_vuelta;

            // mejor tiempo y mejor corredor
            if (num_vuelta == 1 && j == 1)
            {
                mejor_corredor = num_corredor;
                mejor_tiempo = tiempo_vuelta;
            }
            else
            {
                if (tiempo_vuelta < mejor_tiempo)
                {
                    mejor_corredor = num_corredor;
                    mejor_tiempo = tiempo_vuelta;
                }
            }
        };

        printf("Promedio de la vuelta: %.2f\n", promedio_tiempo_vuelta / cant_corredores);
    };

    printf("Promedio General: %.2f\n", promedio_general / (3 * cant_corredores));
    printf("Corredor con el mejor promedio en las 3 vueltas: %d\nSu tiempo fue de: %.2f\n", mejor_corredor, mejor_tiempo);
}