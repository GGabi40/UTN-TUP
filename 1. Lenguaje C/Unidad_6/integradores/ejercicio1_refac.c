#include <stdlib.h>
#include <stdio.h>
#include <string.h>

void cargarArreglo(char tabla[4][4][30]);
void preguntarCantidades(char tabla[4][4][30]);
void ordenarCantidades(char tabla[4][4][30]);
float precioPorProducto(char tabla[4][4][30]);
float calculoIVA(float montoTotalsinIVA);

float iva = 0.21;

int main()
{
    float montoTotalsinIVA, montoTotalconIVA;
    char tabla[4][4][30];
    cargarArreglo(tabla);

    preguntarCantidades(tabla);
    ordenarCantidades(tabla);
    montoTotalsinIVA = precioPorProducto(tabla);
    montoTotalconIVA = calculoIVA(montoTotalsinIVA);

    printf("Acumulado sin IVA: $ %.2f\n", montoTotalsinIVA);
    printf("Acumulado con IVA: $ %.2f\n", montoTotalconIVA);

    return 0;
}

/* Ordena la cantidad por más vendida: */
void ordenarCantidades(char tabla[4][4][30])
{
    int posicion;
    char piv, aux;

    for(int i = 0; i < 4-1; i++)
    {
        piv = i;
        for(int j = i+1; j<4; j++)
        {
            if(atof(tabla[piv][3]) < atof(tabla[j][3]))
            {
                piv = j;
            }
        }

        aux = tabla[i][3];
        tabla[i][3] = tabla[piv][3];
        tabla[piv][3] = aux;
    }

    for(int i = 0; i<4; i++)
    {
        printf("El arreglo ordenado: %s\n", tabla[i,3]);
    }
}

/* Calcula el IVA */
float calculoIVA(float montoTotalsinIVA)
{
    float montoConIVA = montoTotalsinIVA + (montoTotalsinIVA * iva);

    return montoConIVA;
}

/* Devuelve el precio * cantidad de cada producto vendido */
float precioPorProducto(char tabla[4][4][30])
{
    float acc = 0;

    for (int f = 0; f < 4; f++)
    {
        printf("\nPrecio del producto %s: %s\n", tabla[f][1], tabla[f][2]);
        printf("Se vendieron %s unidades.\n", tabla[f][3]);

        float precio = atof(tabla[f][1]); // se vuelve a asignar en cada iteración
        float cantVendida = atof(tabla[f][3]);

        // acumulo precios * cantVendida de TODOS los productos
        acc += precio * cantVendida;
    }

    return acc;
}

/* Pregunto cant de venta por producto */
void preguntarCantidades(char tabla[4][4][30])
{
    float aux;
    printf("Ingrese la cantidad vendida de cada producto: \n");

    for (int f = 0; f < 4; f++)
    {
        printf("Cantidad vendida de: %s\n", tabla[f][2]);
        scanf("%s", tabla[f][3]); // ingresa cant vendida en col 3 del array
    }
}

/*
Cargo tabla:
0 - ID
1 - precio
2 - item
3 - cant vendida
*/
void cargarArreglo(char tabla[4][4][30])
{
    strcpy(tabla[0][0], "01");
    strcpy(tabla[0][1], "3500.00");
    strcpy(tabla[0][2], "Mantel 2x2");
    strcpy(tabla[0][3], "");
    strcpy(tabla[1][0], "02");
    strcpy(tabla[1][1], "800.99");
    strcpy(tabla[1][2], "Plato playo 24cm");
    strcpy(tabla[1][3], "");
    strcpy(tabla[2][0], "03");
    strcpy(tabla[2][1], "1450.50");
    strcpy(tabla[2][2], "Copa vino");
    strcpy(tabla[2][3], "");
    strcpy(tabla[3][0], "04");
    strcpy(tabla[3][1], "650.50");
    strcpy(tabla[3][2], "Plato hondo 22cm");
    strcpy(tabla[3][3], "");
}