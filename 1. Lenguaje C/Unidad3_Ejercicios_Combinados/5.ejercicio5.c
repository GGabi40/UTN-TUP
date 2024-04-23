#include <stdio.h>
#include <stdlib.h>

#define IVA 0.21

void main()
{
    int cant_Productos, i;
    float importe_Total, importe_Unitario, descuento;
    char miembro;

    printf("Ingrese la cantidad de productos comprados: ");
    scanf("%d", &cant_Productos);

    printf("¿Sos miembro de Toco Plus? (S/N) \n");
    scanf(" %c", &miembro);

    for (i = 0; i < cant_Productos; i++) {
        printf("Ingrese el precio del producto: %d\n", i+1);
        scanf("%f", &importe_Unitario);

        importe_Total += importe_Unitario;
    }

//                            AND

    if (importe_Total > 149999 && cant_Productos >= 5) {
        printf("Se ha aplicado descuento por VALOR o CANTIDAD.\n");
        descuento = 0.1;

        importe_Total = importe_Total - (importe_Total * descuento);
    }

    if (miembro == 'S' || miembro == 's') {
        printf("Se ha aplicado descuento por MIEMBRO.\n");
        descuento = 0.05;
        importe_Total = importe_Total - (importe_Total * descuento);
    }

    importe_Total = importe_Total + (importe_Total * IVA);

    printf("Se ha aplicado el IVA.\n");
    printf("El total a pagar: $ %.2f\n", importe_Total);
}