#include <stdio.h>
#include <stdlib.h>

// Ingresar dos números enteros, validar que los mismos sean distintos y que la diferencia entre
// ambos sea mayor a 2. Mostrar todos los números impares entre ambos.

int main()
{
    int num1, num2, resta, i;

    printf("Ingrese un número entero: \n");
    scanf("%d", &num1);

    do
    {
        printf("Ingrese un segundo número: \n");
        scanf("%d", &num2);

        if (num1 < num2) {
            resta = num2 - num1;
        } else {
            resta = num1 - num2;
        }
    } while (num1 == num2 || resta < 2);

    // Mostrar todos los números impares entre ambos

    for (i = num1; i < num2; i++) {
        if (i % 2 != 0) {
            printf("Números impares:\n");
            printf("%d\n", i);
        }
    }

    

   return 0; 
}