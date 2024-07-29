Algoritmo Unid6_ejercicioIntergador3
	definir tabla Como Caracter
	Dimension tabla[4, 3]
	
	cargarArreglo(tabla)
	consultarCantidades(tabla)
	ordenarArreglo(tabla)
	mostrarOrdenado(tabla)
FinAlgoritmo

// Devuelve tabla con cantidades vendidas
SubProceso consultarCantidades(tabla)
	Definir i Como Entero
	Escribir "Ingrese cantidad de ventas de: "
	para i = 0 Hasta 3 Hacer
		Escribir tabla[i, 1]
		leer tabla[i, 2]
	FinPara
FinSubProceso

// Ordenamiento de tabla de mayor a menor cant
SubProceso ordenarArreglo(tabla)
	definir i,j, piv, aux Como Entero
	Definir auxCaracter Como Caracter
	Escribir "Ordenando lista..."
	
	para i = 0 Hasta 3-1 Hacer
		piv = i
		para j = i+1 Hasta 3-1 Hacer
			si (ConvertirANumero(tabla[piv,2]) < ConvertirANumero(tabla[j,2])) Entonces
				piv = j
			FinSi
		FinPara
		
		aux = ConvertirANumero(tabla[i,2])
		auxCaracter = tabla[i,1]
		tabla[i,2] = tabla[piv,2]
		tabla[i,1] = tabla[piv,1]
		tabla[piv,2] = ConvertirATexto(aux);
		tabla[piv,1] = auxCaracter;
	FinPara
FinSubProceso

SubProceso mostrarOrdenado(tabla)
	definir i, j Como Entero
	para i = 0 Hasta 3 Hacer
		Escribir "Objeto: ", tabla[i, 1]
		Escribir "Cant vendida: ", tabla[i, 2]
	FinPara
FinSubProceso

// Cargo tabla:
//	0 - ID
//	1 - item
//	2 - cant vendida
SubProceso cargarArreglo(tabla)
	tabla[0,0] = "01"
	tabla[0,1] = "Mantel 2x2"
	tabla[0,2] = ""
	tabla[1,0] = "02"
	tabla[1,1] = "Plato playo 24cm"
	tabla[1,2] = ""
	tabla[2,0] = "03"
	tabla[2,1] = "Copa vino"
	tabla[2,2] = ""
	tabla[3,0] = "04"
	tabla[3,1] = "Plato hondo 22cm"
	tabla[3,2] = ""
FinSubProceso