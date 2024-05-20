#include <stdio.h>
#include <stdlib.h>

void main()
{
    int num, i;

    printf("Ingrese un número para conocer su tabla de multiplicación\n");
    scanf("%d", &num);

    for(i = 0; i <= 10; i++) {
        printf("%d x %d = %d\n",i, num, i * num);
    }
}