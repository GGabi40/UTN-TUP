// Realizar un programa que permita cargar los datos de un cliente, Nombre, apellido, DNI. La
// carga del DNI debe validarse a partir de una función llamada ValidarDNI, dicha función
// recibirá como parámetro de entrada el dni ingresado y devolverá una variable del tipo lógica
//  Verdadero/Falso. Nota: El DNI debe estar formado por números y tener una longitud máxima
// 	de 8 caracteres y una longitud mínima de 6 caracteres.

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>

bool validarDNI(char dni[])
{
    bool dniInvalido;

    if(strlen(dni) < 6 || strlen(dni) > 8)
    {
        dniInvalido = true;
        printf("DNI Inválido. Intente nuevamente\n");
    } else {
        dniInvalido = false;
    }

    return dniInvalido;
}

int main()
{
    char nombre[50], apellido[50], dni[8];
   
    printf("Ingrese su nombre:\n");
    scanf("%s", nombre);
    printf("Ingrese su apellido:\n");
    scanf("%s", apellido);
    printf("Ingrese su DNI:\n");

    do {
        scanf("%s", dni);
    } while(validarDNI(dni));

    printf("¡Bienvenido/a %s %s!", nombre, apellido);
    
    return 0;
}