#include <stdio.h>
#include <stdlib.h>

int main()
{
    int i;
    //de 10 hasta 1  O
    // en 10: salto
    // en 9: salto

    /* 
    @@@@@@@@ 10
    @@@@@@ 9
    @@@@@ 8
    */

    for (i = 10; i > 0; i--) {
        for (int j = 0; j < i; j++)
        {
            printf("@");
        }
        printf("\n");
    }

    for (i = 0; i < 10; i++) {
        for (int j = 0; j < i; j++)
        {
            printf("@");
        }
        printf("\n");
    }


    return 0;
}