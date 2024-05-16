#include <stdio.h>
#include <stdlib.h>
#include <bool.h>

// 9 9 9 9 9 MÁXIMO 
// 1 0 1 0 1
// 1 1 1 1 1
// 1 2 3 4 5
// 9 5 4 6 6
// 1 0 0 0 0 MÍNIMO
// 0 0 0 0 1 == 1  NO CUENTA COMO 5 DÍGITOS

void main()
{
    int legajo, materia, comision, turno;
    bool invalido = false;

    do
    {
        // mientras sea menor q 10.000: se repite
        // mientras sea mayor q 99.999: se repite
        printf("Ingrese su legajo: \n");
        scanf("%d", &legajo);
    } while (legajo < 10000 || legajo > 99999);

    do {
        // se repite mientras sea menor q 1 o mayor q 3
        printf("Seleccione la materia que quiere recursar: \n");
        printf("1 - laboratorio / 2 - prog / 3 - matem \n");
        scanf("%d", &materia);
    } while (materia < 1 || materia > 3);

    do {
        // se repite mientras sea menor q 1 o mayor q
        printf("Ingrese la comisión cursada anteriormente: \n");
        printf("1 / 2 / 3 \n");
        scanf("%d", &comision);
    } while (comision < 1 || comision > 3);

    do {
        printf("Ingrese el turno de preferencia: \n");
        printf("M / T / N\n");
        scanf(" %c", &turno);
    } while (turno != 'm' || turno != 'M' || turno != 'T' || turno != 't' || turno != 'N' || turno != 'n');

    /* if (turno != 'm' || turno != 'M' || turno != 'T' || turno != 't' || turno != 'N' || turno != 'n') {
        printf("Valor de turno inválido.");
    };

    if (comision < 1 || comision > 3) {
        printf("Valor de comisión inválida.");
    };

    if (materia < 1 || materia > 3) {
        printf("Valor de materia inválida.");
    };*/
} 