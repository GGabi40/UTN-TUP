#include <stdio.h>
#include <stdlib.h>

/* PUNTEROS */

int main()
{   
    // OPERADOR &
    int Dato = 5;
    int *PtrDato;

    PtrDato = &Dato;

    printf("PTR DATO: %d\n", *PtrDato);
    
    return 0;
}