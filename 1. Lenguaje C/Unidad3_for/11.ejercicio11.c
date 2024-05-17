#include <stdio.h>

int main()
{
    for(int i = 1; i <= 10; i++)
    {
        //  resto de la division
        if (i % 2 == 0) // PAR
        {
            printf("@@\n");
        } else {
            // IMPAR
            printf("@\n");
        }
    }

    return 0;
}