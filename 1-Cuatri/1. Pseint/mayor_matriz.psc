Algoritmo mayor_Matriz
	Definir i, matriz, mayorNum Como Entero
	Dimension matriz[10]
	mayorNum = 0
	
	Para i = 0 Hasta 9 Con Paso 1 Hacer
		Imprimir "Ingrese un numero: ";
		Leer matriz[i]
		si matriz[i] > mayorNum Entonces
			mayorNum = matriz[i]
		FinSi
	FinPara
	
	Imprimir "El mayor es: ", mayorNum
FinAlgoritmo