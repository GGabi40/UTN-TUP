Algoritmo unid6_EJERCICIOREPASO
	definir arreglo, i, dim como entero
	escribir "Ingrese la dimensión del arreglo:"
	leer dim
	
	dimension arreglo[dim]
	
	Para i = 0 hasta dim-1 HACER
		escribir "ingrese el numero para el arreglo", i
		leer arreglo[i]
	finpara
	
	ordenararreglo(arreglo,dim)
	mostrararreglo(arreglo,dim)
FinAlgoritmo

Subproceso ordenararreglo(arreglo,dim)
	definir i, j, piv, aux como entero
	Para i = 0 hasta dim-2 hacer
		piv = i
		Para j = i+1 hasta dim-1 hacer
			si (arreglo[piv]>arreglo[j]) entonces
				piv = j
			finsi
		finpara
		aux = arreglo[i]
		arreglo[i] = arreglo[piv]
		arreglo[piv] = aux
	finpara
FinSubproceso

Subproceso mostrararreglo(arreglo,dim)
	definir i como entero
	Escribir "Arreglo ordenado:"
	Para i = 0 hasta dim-1 hacer
		escribir sin saltar arreglo[i]
		escribir sin saltar " "
	FinPara
FinSubproceso