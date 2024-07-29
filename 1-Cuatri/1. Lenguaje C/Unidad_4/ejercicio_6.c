#include <stdio.h>
#include <stdlib.h>

int main()
{
    int contador, acc, i, j, n, numRepetido, numRepeticiones;

    contador = 0;
    numRepeticiones = 0;

    printf("Ingrese cuántos elementos quiere agregar.\n");
    scanf("%d", &n);

    int matriz[n];

    // almacena valores en matriz
    for (i = 0; i < n; i++) {
        printf("Ingrese un numero entero:\n");
        scanf("%d", &matriz[i]);
    }
    
    // verifica repeticiones
    for (i = 0; i < n; i++) {
        contador = 0;

        // verifica si hay numeros iguales dentro de la matriz e incrementa contador
        for (j = 0; j < n; j++) {
            if(matriz[i] == matriz[j]) {
                contador++;
            }
        }

        if (contador > numRepeticiones) {
            numRepeticiones = contador;
            numRepetido = matriz[i];
        }
    }

    printf("El número más repetido fue: %d y se repitió un total de: %d veces.\n", numRepetido, numRepeticiones);

    return 0;
}