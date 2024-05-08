#include <stdio.h>
#include <stdlib.h>

int main()
{
    int matriz[6] = {10, 20, 5, 15, 30, 20};
    int mayor_numero = matriz[0];
    int suma = 0;
    int acumulador = 0;
    int i;

    for(i = 0; i < 6; i++) {
        // Informar el vector de la forma: "Índice: X, Valor: Y".
        printf("a. ÍNDICE: %d -> VALOR: %d\n\n", i, matriz[i]);

        // Totalizar el vector e informar el total.
        suma += matriz[i];

        // Informar el contenido de las posiciones impares.
        if (matriz[i] % 2 == 1) {
            printf("c. d. Los numeros impares y sus posiciones son: índice: %d - valor: %d \n", i, matriz[i]);
        };

        // Informar el mayor número
        if (i == 0) {
            mayor_numero = matriz[i];
        } else if (mayor_numero > matriz[i]) {
            mayor_numero = matriz[i];
        }
        
        if(matriz[i] == 20) {
            acumulador = acumulador +1;
        }
        
    }

    printf("b. La suma es: %d \n\n", suma);
    printf("e. El mayor número es: %d\n", mayor_numero);
    printf("f. El número 20 aparece: %d veces \n", acumulador);

    return 0;
}