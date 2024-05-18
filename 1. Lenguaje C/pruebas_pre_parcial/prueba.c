#include <stdio.h>
#include <stdlib.h>

int main()
{
    int contador=0, num, resultado;
    
    printf("Ingresé num par: \n");
    scanf("%d", &num);
    
    do {
        if (contador == 0) {
            resultado = num*2;
        } else {
            resultado = (num-contador)*2;
        }
        
        contador = contador+2;
        
    printf("%d\n",resultado);

    } while (resultado > 0);
    
    
    return 0;
}