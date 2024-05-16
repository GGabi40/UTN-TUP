#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void main()
{
    int medio_pago, tipo_bici;
    float precio_bici, descuento;
    char es_jubilado;
    char tipo_bici_comun;

    printf("Ingrese medio de pago 1- efectivo/debito; 2- credito\n");
    scanf("%d", &medio_pago);

    printf("Es jubilado? Ingrese S o N según el caso\n");
    scanf(" %c", &es_jubilado);

    printf("Ingrese el tipo de bicicleta. 1- deportiva; 2-comun\n");
    scanf("%d", &tipo_bici);

    if (tipo_bici == 1) {
        precio_bici = 500;
    } else {
        printf("Desea que tenga canasto? Ingrese S o N según el caso\n");
        scanf(" %c", &tipo_bici_comun);

        if (tipo_bici_comun == 'S' || tipo_bici_comun == 's') {
            precio_bici = 400;
        } else {
            precio_bici = 300;
        }
    }

    if (es_jubilado == 'S' || es_jubilado == 's') {
        if (tipo_bici == 1) {
            descuento = 0.25;
        } else {
            descuento = 0.10;
        }
    }

    if (medio_pago = 1) {
        descuento = descuento + 0.15;
    }

    precio_bici = precio_bici - precio_bici * descuento;

    printf("El precio de la bici es de: %.2f\n", precio_bici);
}