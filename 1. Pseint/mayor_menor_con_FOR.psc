Algoritmo mayor_menor_FOR
	Definir num, mayorNum, menorNum, i Como Entero
	Para i<-1 Hasta 5 Con Paso 1 Hacer
		Escribir 'Dime un número POSITIVO.'
		Leer num
		// Se asume que el numero mayor y el menor es el primero, 
		// luego en SINO se comparan los <> valores ingresados.
		Si i=1 Entonces
			mayorNum <- num
			menorNum <- num
		SiNo
			Si num>mayorNum Entonces
				mayorNum <- num
			FinSi
			Si num<menorNum Entonces
				menorNum <- num
			FinSi
		FinSi
	FinPara
	Escribir 'El mayor es: ', mayorNum
	Escribir 'El menor es: ', menorNum
FinAlgoritmo
