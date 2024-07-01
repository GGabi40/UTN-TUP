Algoritmo Unid3_ejercicio10_combinado
	Definir n, x, i Como Entero
	Repetir
		Escribir 'Ingrese un numero entero positivo: '
		Leer n
	Mientras Que (n<=0)
	Para i<-0 Hasta n Con Paso 1 Hacer
		Si (i==0) Entonces
			x <- i
			Escribir 'n = ', i, ' ==> ', 1
		SiNo
			x <- 2^i
			Escribir 'n = ', i, ' ==> ', x
		FinSi
	FinPara
	// Pide un número entero positivo, guarda en la variable "n" y
	// en el bucle "Para", que arranca desde 0 y va hasta el número
	// ingresado por usuario, se eleva al 2 por todos los números naturales
	// hasta la cantidad ingresada por el usuario (n).
FinAlgoritmo
