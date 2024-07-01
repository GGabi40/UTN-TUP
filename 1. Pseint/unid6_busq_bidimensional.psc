Algoritmo unid6_busq_bidimensional
	Definir numeros_enteros, n, m Como Entero
	n = 3
	m = 3
	Dimension numeros_enteros[n,m]
	cargar_arreglo(numeros_enteros, n, m)
	mostrar_arreglo(numeros_enteros, n, m)
FinAlgoritmo

SubProceso cargar_arreglo(array, n, m)
	Para i<-0 Hasta n-1 Con Paso 1 Hacer
		Para j<-0 Hasta m-1 Con Paso 1 Hacer
			Escribir "Ingrese un numero ... "
			Leer array[i,j]
		Fin Para
	Fin Para
FinSubProceso

SubProceso mostrar_arreglo(array, n, m)
	Para j<-0 Hasta m-1 Con Paso 1 Hacer
		Para i<-0 Hasta n-1 Con Paso 1 Hacer
			Escribir Sin Saltar array[i,j], "  "
		Fin Para
	Fin Para
	Escribir "  "
FinSubProceso