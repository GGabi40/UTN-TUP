#include <stdio.h>
#include <stdlib.h>

/* 
Dado el vector inflación
{0.8, 0.1, 0.3, 0.4, 0.3, 0.6, 0.5, 0.3, 0.7, 0.3, 0.2, 0.9}
Cada ítem del vector representa la inflación de un mes de tal
manera que el primer ítem del vector que es 0.8 representa la
inflación de Enero, y el último ítem del vector que es 0.9 
representa la inflación de diciembre. Se pide:

a. Informar la inflación anual

b. Informar la inflación más baja, junto con el nro. de mes. 
Por ejemplo: Mes 2 = 0.1

c. Informar la inflación más alta, junto con el nro. de mes. 
Por ejemplo: Mes 12 = 0.9

*/

int main()
{
    //                 0    1    2    3    4    5    6    7    8    9    10   11  -> 12 posiciones
    float matriz[] = {0.8, 0.1, 0.3, 0.4, 0.3, 0.6, 0.5, 0.3, 0.7, 0.3, 0.2, 0.9};
    float inflacion_anual = 0;
    float inflacion_baja, inflacion_alta;
    int i, mes_bajo, mes_alto;

    for (i = 0; i < 12; i++) {

        inflacion_anual += matriz[i];

        if (i == 0) {
            inflacion_baja = matriz[i];
            inflacion_alta = matriz[i];
            mes_bajo = i;
            mes_alto = i;
        } else if (inflacion_baja > matriz[i]) {
            inflacion_baja = matriz[i];
            mes_bajo = i + 1;
        } else if (inflacion_alta < matriz[i]) {
            inflacion_alta = matriz[i];
            mes_alto = i + 1;
        }
    }

    inflacion_anual = (inflacion_anual / 12) * 100;
    inflacion_baja = inflacion_baja * 100;
    inflacion_alta = inflacion_alta * 100;

  // %% = agrega porcentaje al printf sin saltar error
    printf("a. La inflación anual es de: %.2f%%\n", inflacion_anual);
    printf("b. La inflación más baja fue del mes %d: %.2f%%\n", mes_bajo, inflacion_baja);
    printf("c. La inflación más alta fue del mes %d: %.2f%%\n", mes_alto, inflacion_alta);

    return 0;
}