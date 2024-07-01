Algoritmo unid6_orden_bidimensional
	Definir numeros_enteros, n, m Como Entero
	n = 3
	m = 3
	Dimension numeros_enteros[n,m]
	
	cargar_arreglo(numeros_enteros, n, m)
	ordenar_arreglo_asc(numeros_enteros, n, m, 0)
	mostrar_arreglo(numeros_enteros, n, m)
//	busqueda_binaria(array, n, 1, 5)
FinAlgoritmo

// ----- BUSQUEDA BINARIA
SubProceso busqueda_binaria(array, n, columna_busc, elemento)
	Definir ind_sup, ind_inf, ind_med, encontrado Como Entero
	ind_inf = 0
	ind_sup = n-1
	//rango (0..n-1)
	Repetir
		ind_med = trunc((ind_inf + ind_sup)/2)
		Si array[ind_med, columna_busc] == elemento Entonces
			encontrado = 1
		sino 
			Si array[ind_med, columna_busc] > elemento Entonces
				ind_sup = ind_med - 1
			SiNo
				ind_inf = ind_med + 1
			FinSi
		FinSi
	Mientras Que encontrado == 0 y ind_inf<=ind_sup
	
	Si encontrado == 0 Entonces
		Escribir "Elemento No encontrado.. "
	SiNo
		Escribir "Elemento encontrado.. "
	FinSi
FinSubProceso

// ----- BUSQUEDA SECUENCIAL
SubProceso busq_secuencial(array, n , columna_buscar, elemento)
	Definir i Como Entero
	i = 0
	Repetir
		si array[i, columna_buscar] == elemento Entonces
			i = n+1
		SiNo
			i = i+1;
		FinSi
	Mientras Que  i <= n-1
	// i <= n-1 : numero de filas
	
	// encontrado
	Si i == n Entonces
		Escribir "Elemento no encontrado."
	SiNo
		Escribir "Elemento encontrado."
	FinSi
FinSubProceso

// ---- ORDENAR ARREGLO BIDIMENSIONAL
SubProceso ordenar_arreglo_asc(array, n, m, columna_ord)
	Definir aux Como Entero
	Para i<-0 Hasta n-2 Con Paso 1 Hacer
		Para j<-i+1 Hasta n-1 Con Paso 1 Hacer
			si array[i, columna_ord] > array[j, columna_ord] Entonces
				Para k<-0 Hasta m-1 Con Paso 1 Hacer
					aux = array[i, k]
					array[i,k] = array[j,k]
					array[j,k] = aux
				Fin Para
			FinSi
		Fin Para
	Fin Para
FinSubProceso

SubProceso cargar_arreglo(array, n, m)
	Para i<-0 Hasta n-1 Con Paso 1 Hacer
		Para j<-0 Hasta m-1 Con Paso 1 Hacer
			Escribir "Ingrese un numero en posicion ", i+1, " ", j+1
			Leer array[i,j]
		Fin Para
	Fin Para
FinSubProceso

SubProceso mostrar_arreglo(array, n, m)
	Para i<-0 Hasta m-1 Con Paso 1 Hacer
		Para j<-0 Hasta n-1 Con Paso 1 Hacer
			Escribir Sin Saltar array[i,j], "  "
		Fin Para
		Escribir ""
	Fin Para
FinSubProceso