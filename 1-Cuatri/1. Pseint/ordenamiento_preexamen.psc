Algoritmo ordenamiento_preexamen
	definir matriz, i, indice_minimo Como Entero
	dimension matriz[6]
	
	Escribir "La matriz DESORDENADA: "
	
	para i = 0 Hasta 5 Hacer
		matriz[i] = Aleatorio(0, 10)
		
		Escribir Sin Saltar matriz[i]
		Escribir Sin Saltar " "
	FinPara
	
	definir aux, j, contador Como Entero
	
	contador=0
	
	Escribir ""
	Escribir ""
	Escribir "La matriz ORDENADA: "
	
	para i = 0 Hasta 5-1 Hacer
		indice_maximo = i
		
		// 9 8 7 6 5 4
		// 4 8 7 6 5 9
		para j = i+1 Hasta 5-1 Hacer
			si (matriz[j] > matriz[indice_maximo]) Entonces
				indice_maximo = j
			FinSi
			contador = contador+1
		FinPara
		
		aux = matriz[i]
		matriz[i] = matriz[indice_maximo]
		matriz[indice_maximo] = aux
	FinPara
	
	para i = 0 Hasta 5 Hacer
		Escribir Sin Saltar matriz[i]
		Escribir Sin Saltar " "
	FinPara
	Escribir " Comparaciones hechas: ", contador
FinAlgoritmo
