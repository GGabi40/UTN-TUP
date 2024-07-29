/*
Realizar un programa que permita ver información a un cliente de un banco. Para ello
el cliente deberá ingresar su usuario (número de DNI) y contraseña (número entero),
validar que los datos ingresados sean correctos, se permitirá al cliente 3 intentos de
ingreso de contraseña.  OK

 Al loguarse correctamente presentar un menú con las
siguientes opciones:
1- Consultar saldo
2- Consultar CBU
3- Salir
 */

#include <stdio.h>
#include <stdlib.h>

void main()
{
    int dni = 35654123;
    int pass = 1234;
    int saldo = 150000;
    int cbu = 986323456;
    int dniIngresado = 0;
    int passIngresado = 0;
    int intentos = 1;
    int ingresaCorrectamente = 0;
    int opciones;

    while (intentos <= 3)
    {
        printf("Ingrese el dni: \n");
        scanf("%d", &dniIngresado);
        printf("Ingrese la contraseña: \n");
        scanf("%d", &passIngresado);

        if (dni == dniIngresado && pass == passIngresado)
        {
            ingresaCorrectamente = 1;
            break;
        }
        else
        {
            printf("Alguno de los valores ingresados es incorrecto.\n");
            intentos++;
        }
    }

    if (ingresaCorrectamente == 1)
    {
        do
        {
            printf("Ingrese la opción que desea realizar:\n");
            printf("1- Consultar saldo \n2- Consultar CBU \n3- Salir\n");
            scanf("%d", &opciones);

            switch (opciones)
            {
            case 1:
                printf("Su saldo es de: %d\n", saldo);
                printf("\n");
                break;
            case 2:
                printf("Su CBU es: %d\n", cbu);
                printf("\n");
                break;
            case 3:
                printf("Sesión cerrada.\n");
                printf("\n");
                ingresaCorrectamente = 0;
                break;
            default:
                printf("Opción inválida.\n");
                printf("Sesión cerrada.\n");
                ingresaCorrectamente = 0;
                break;
            }
        } while (opciones != 3);
    }
    else
    {
        printf("Llame la central para solucionar el problema.\n");
        printf("Cuenta bloqueada.\n");
    }
}