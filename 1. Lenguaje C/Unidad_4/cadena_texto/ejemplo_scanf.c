#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    char nombres[10][50];
    for (int i = 0; i < 10; i++)
    {
        printf("Ingrese el nombre %d\n", i + 1);
        // scanf("%s", &nombres[i]);
        fgets(nombres[i], sizeof(nombres[i]), stdin);
        nombres[i][strcspn(nombres[i], "\n")] = '\0';
    }

    // scanf lee hasta un espacio vacío: ESPACIO o ENTER
    // fgets LEE 3 ARGUMENTOS:
    // 1o -> arreglo en donde almacenar cadena
    // 2o -> cant caracteres que quiero leer (sizeof() -> contiene cant de bits que posee lo que está dentro de paréntesis)
    // 3o -> de donde busca la cadena (stdin: busca de la entrada del teclado)

    // strcspn: encuentra dentro de cadena la aparición de "\n" y lo cambia a NULL
    
    for (int i = 0; i < 10; i++)
    {
        printf("%s\n", nombres[i]);
    }
}