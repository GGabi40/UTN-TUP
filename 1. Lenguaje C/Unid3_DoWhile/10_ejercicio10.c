/* 
Retomamos el ejercicio 11 del documento LC1 – Práctica 2 – Estructuras de control if y
switch:
“Pedir al usuario que ingrese dos números (permitir ingresar número con decimales).
Luego presentar el siguiente menú:
1. Informar su suma
2. Informar su resta
3. Informar su multiplicación
4. Informar su división
5. Salir
Seleccione una operación:
Mostrar el resultado de la operación seleccionada. Si el usuario ingresa la opción 5 el
programa debe terminar.”
Vamos a modificar el mismo de manera que el menú se muestre al usuario mientras
este no se ingrese la opción 6.
Además agregar una opción 5 que muestre la cantidad de operaciones que realizó el
usuario.
El menú que se mostrará al usuario quedará entonces de la siguiente forma:
1. Informar su suma
2. Informar su resta
3. Informar su multiplicación
4. Informar su división
5. Informar cantidad de operaciones realizadas
6. Salir
Seleccione una operación
 */

#include <stdio.h>
#include <stdlib.h>

int main()
{

    float num1, num2;
    int opcion, contador_operaciones = 0;

    printf("Ingrese el primer numero: \n");
    scanf("%f", &num1);
    printf("Ingrese el segundo numero: \n");
    scanf("%f", &num2);

    do
    {
        printf("\nmenu\n");
        printf("Ingrese la operacion que desea realizar: \n");
        printf("1. Suma \n");
        printf("2. Resta \n");
        printf("3. Multiplicacion \n");
        printf("4. Division \n");
        printf("5. Cantidad de operaciones realizadas\n");
        printf("6. Salir \n");
        scanf("%d", &opcion);
        switch (opcion)
        {
        case 1:
            printf("\nLa suma es: %.2f\n", num1 + num2);
            contador_operaciones++;
            break;
        case 2:
            printf("\nLa resta es: %.2f\n", num1 - num2);
            contador_operaciones++;
            break;
        case 3:
            printf("\nLa multiplicacion es: %.2f\n", num1 * num2);
            contador_operaciones++;
            break;
        case 4:
            printf("\nLa division es: %.2f\n", num1 / num2);
            contador_operaciones++;
            break;
        case 5:
            printf("\nLa cantidad de operaciones realizadas es: %d\n", contador_operaciones);
            break;
        case 6:
            break;
        default:
            printf("Opcion invalida\n");
            break;
        }
    } while (opcion < 6);

    return 0;
}