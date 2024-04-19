#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

void main()
{
    int num, numMayor, numMenor, cantidadNumeros;
    bool primerNumero, valorIncorrecto;

    primerNumero = true;
    valorIncorrecto = false;

    numMayor = 0;
    numMenor = 0;

    printf("Ingrese la cantidad de numeros:\n");
    scanf("%d", &cantidadNumeros);

    for(int i = 0; i < cantidadNumeros; i++) {
        printf("Ingrese un numero Entero mayor o igual a 0:\n");
        scanf("%d", &num);

        if (num < 0) {
            printf("Valor inválido.\n");
            i = cantidadNumeros;
            valorIncorrecto = true;
        } else {
            if(primerNumero) {
                numMayor = num;
                numMenor = num;
                primerNumero = false;
            } else {
                if(num > numMayor) {
                    numMayor = num;
                }

                if(num < numMenor) {
                    numMenor = num;
                }
            }
        }
    }
        
    if (!valorIncorrecto) {
        printf("El mayor numero es: %d y el menor es: %d\n", numMayor, numMenor);
    }
}