// FUNCIONES Y SUBPROCESOS
#include <stdlib.h>
#include <stdio.h>

// funciones: si terminan con return
// significa que devuelve un valor.
// Subproceso: no devuelve un valor.

// Estructura:
/*
tipo_de_retorno nombreFuncion(parametros)
{ 
   cuerpo
   return expresion;
}
*/

// Parámetros:
// (tipo parametro1, tipo parametro2, ...)
// Pueden ser: por valor o por referencia (por defecto: POR VALOR);

// prototipo de la funcion sumar:
float sumar(float num1, float num2); // otra alternativa:
// float sumar(float, float);

int main()
{
    float numero1, numero2, resultado;

    printf("Ingresa el primer numero: \n");
    scanf("%f", &numero1);
    printf("Ingresa el segundo numero: \n");
    scanf("%f", &numero2);

    resultado = sumar(numero1, numero2); // POR VALOR: pasa una copia de numero1 y numero2
    printf("La suma es: %.2f\n", resultado);

    return 0;
}

// EJEMPLO: 
float sumar(float num1, float num2)
{
    float respuesta;
    respuesta = num1 + num2;
    return respuesta;
}


// void: retorna vacío (es un subproceso)