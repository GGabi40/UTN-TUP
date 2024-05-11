#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main()
{
    int num_alumnos, num_comisiones, opciones, i, j;
    int notas_com1 = 0, notas_com2 = 0, notas_com3 = 0;
    int acc_com1 = 0, acc_com2 = 0, acc_com3 = 0;
    int contador_notas_3_4_com1 = 0, contador_notas_3_4_com2 = 0, contador_notas_3_4_com3 = 0;
    int contador_notas_4_6_com1 = 0, contador_notas_4_6_com2 = 0, contador_notas_4_6_com3 = 0;
    int contador_notas_6_com1 = 0, contador_notas_6_com2 = 0, contador_notas_6_com3 = 0;
    int aplazos, regulares, aprobados;
    float promedio_com1, promedio_com2, promedio_com3, acc_total;
    bool valor_valido = true;

    num_comisiones = 3;

    do
    {
        printf("Ingrese la cantidad de alumnos:\n(Debe ser un número positivo).\n");
        scanf("%d", &num_alumnos);
    } while (num_alumnos < 0);

    do
    {
        printf("\nMENÚ\n");
        printf("Ingrese una opción:\n");
        printf("1- Cargar notas alumnos por comisión\n");
        printf("2- Promedio por Comisión\n");
        printf("3- Promedio de la materia\n");
        printf("4- Cantidad de aplazos en la materia\n");
        printf("5- Cantidad de regularizados en la materia\n");
        printf("6- Cantidad de aprobados en la materia\n");
        printf("7- Salir\n");
        scanf("%d", &opciones);

        switch (opciones)
        {
        case 1:
            printf("\nELEGIDO: Cargar notas por Comisión.\n");

            // Bucle para comisiones
            for (i = 0; i < num_comisiones; i++)
            {
                printf("Cargando notas de la comisión %d\n", i + 1);

                // Bucle para Alumnos x comisión
                for (j = 0; j < num_alumnos; j++)
                {
                    printf("Notas del alumno %d\n", j + 1);

                    if (notas_com1 < 0 || notas_com1 > 10 || notas_com2 < 0 || notas_com2 > 10 || notas_com3 < 0 || notas_com3 > 10)
                    {
                        valor_valido = false;
                        break;
                    }

                    if (i == 0)
                    {
                        scanf("%d", &notas_com1);
                        acc_com1 += notas_com1;
                        if (notas_com1 >= 0 && notas_com1 < 4) {
                            contador_notas_3_4_com1++;
                        } else if (notas_com1 >= 4 && notas_com1 < 6) {
                            contador_notas_4_6_com1++;
                        } else if (notas_com1 >= 6) {
                            contador_notas_6_com1++;
                        }
                    }
                    else if (i == 1)
                    {
                        scanf("%d", &notas_com2);
                        acc_com2 += notas_com2;
                        if (notas_com2 >= 0 && notas_com2 < 4) {
                            contador_notas_3_4_com2++;
                        } else if (notas_com2 >= 4 && notas_com2 < 6) {
                            contador_notas_4_6_com2++;
                        } else if (notas_com2 >= 6) {
                            contador_notas_6_com2++;
                        }
                    }
                    else
                    {
                        scanf("%d", &notas_com3);
                        acc_com3 += notas_com3;
                        if (notas_com3 >= 0 && notas_com3 < 4) {
                            contador_notas_3_4_com3++;
                        } else if (notas_com3 >= 4 && notas_com3 < 6) {
                            contador_notas_4_6_com3++;
                        } else if (notas_com3 >= 6) {
                            contador_notas_6_com3++;
                        }
                    }

                    aplazos = contador_notas_3_4_com1 + contador_notas_3_4_com2 + contador_notas_3_4_com3;
                    regulares = contador_notas_4_6_com1 + contador_notas_4_6_com2 + contador_notas_4_6_com3;
                    aprobados = contador_notas_6_com1 + contador_notas_6_com2 + contador_notas_6_com3;
                }
            }
            break;
        case 2:
            printf("\nELEGIDO: Promedio por Comisión.\n");

            for (i = 0; i < num_comisiones; i++)
            {
                if (i == 0)
                {
                    promedio_com1 = acc_com1 / num_alumnos;
                    printf("Promedio de la comisión %d = %.2f\n", i+1, promedio_com1);
                }
                else if (i == 1)
                {
                    promedio_com2 = acc_com2 / num_alumnos;
                    printf("Promedio de la comisión %d = %.2f\n", i+1, promedio_com2);
                }
                else
                {
                    promedio_com3 = acc_com3 / num_alumnos;
                    printf("Promedio de la comisión %d = %.2f\n", i+1, promedio_com3);
                }
            }
            break;
        case 3:
            printf("\nELEGIDO: Promedio total de la materia.\n");

            acc_total = (acc_com1 + acc_com2 + acc_com3) / (num_alumnos * num_comisiones);
            printf("El promedio total de la materia es: %.2f\n", acc_total);

            break;
        case 4:
            printf("\nELEGIDO: Cantidad de aplazos en la materia.\n");
            printf("La cantidad total de alumnos de la comisión que se sacó una nota entre 0 y 3 es: %d\n", aplazos);

            break;
        case 5:
            printf("\nELEGIDO: Cantidad regularizados en la materia.\n");
            printf("La cantidad total de alumnos regulares: %d\n", regulares);
            
            break;
        case 6:
            printf("\nELEGIDO: Cantidad aprobados en la materia.\n");
            printf("La cantidad total de alumnos aprobados: %d\n", aprobados);

            break;
        case 7:
            printf("ELEGIDO: Salir.\n");
            printf("\n¡Hasta pronto!.\n");
            break;
        default:
            printf("Opción no válida.");
            break;
        }

    } while (opciones != 7 && valor_valido);

    if (!valor_valido)
    {
        printf("\nNOTA NO VÁLIDA.\nNo debe ser negativa.\nNo debe ser mayor a 10.\n");
        printf("Intente nuevamente.\n");
    }
}