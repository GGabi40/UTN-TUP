/* 
Realizar un programa que acumule (sume) valores ingresados por teclado 
hasta ingresar el 9999 (no sumar dicho valor, indica que ha finalizado la carga). 
Imprimir el valor acumulado e informar si dicho valor es cero, 
mayor a cero o menor a cero.
*/

#include <stdio.h>
#include <stdlib.h>

void main()
{
    int suma = 0;
    int fin, num;
    char repetir;

    fin = 0;

    do {

        do {
            printf("Ingrese un numero: \n");
            scanf("%d", &num);

            if(num == 9999) {
                suma = suma;
                fin = 9999;
            } else {
                suma += num;
            }

            printf("\n");
            printf("Para finalizar el proceso, ingrese 9999\n");

        } while (fin != 9999);

            printf("La suma es de: %d.\n", suma);

            printf("\n");

            printf("¿Desea repetir el proceso? (S/N)\n");
            scanf(" %c", &repetir);

            if(repetir == 's' || repetir == 'S') {
                fin = 0;
            }

            if(suma > 0) {
                printf("El valor es positivo.\n");
            } else if (suma == 0){
                printf("El valor es 0.\n");
            } else {
                printf("El valor es negativo.\n");
            }

    } while (repetir == 's' || repetir == 'S');

    printf("Suma final: %d.\n", suma);
    printf("\n");
    printf("Proceso finalizado.\n");
}
