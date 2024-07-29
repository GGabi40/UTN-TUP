#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>

/* 
Ingresar 2 nombres e indicar cuál de los dos precede alfabéticamente al otro o si son
iguales.
*/
// toupper(arg1)  -> To Upper: pasa todo a mayuscula -> libería ctype.h

int main()
{
    char nombre1[50], nombre2[50];

    printf("Ingrese el primer nombre EN MAYÚSCULA: \n");
    fgets(nombre1, sizeof(nombre1), stdin);
    nombre1[strcspn(nombre1, "\n")] = '\0';

    printf("Ingrese el segundo nombre EN MAYÚSCULA: \n");
    fgets(nombre2, sizeof(nombre2), stdin);
    nombre2[strcspn(nombre2, "\n")] = '\0';

    if(strcmp(nombre1, nombre2) == 0)
    {
        printf("Son iguales\n");
    } else if (strcmp(nombre1, nombre2) < 0){
        printf("%s precede alfabeticamente a %s\n",nombre1, nombre2);
    } else {
        printf("%s precede alfabeticamente a %s\n",nombre2, nombre1);
    }

    return 0;    
}