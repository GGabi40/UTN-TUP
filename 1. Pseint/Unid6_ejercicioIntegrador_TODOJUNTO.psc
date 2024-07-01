Algoritmo Unid6_ejercicioIntegrador1
	definir tabla Como Caracter
	definir montoTotalSinIVA Como Real
	Dimension tabla[4, 4]
	
	cargarArreglo(tabla)
	
	preguntaCantidadVenta(tabla)
	// ejercicio 3
	ordenarPorCantidadVendida(tabla)
	// ----
	montoTotalSinIVA = calculaCantidad(tabla)
	montoTotalConIVA = calculoIVA(montoTotalSinIVA)
	
	Escribir ""
	Escribir "Acumula SIN IVA un total de $ ", montoTotalSinIVA
	Escribir "Acumula CON IVA un total de $ ", montoTotalConIVA
	Escribir ""
	ivaCalculo(montoTotalSinIVA)
FinAlgoritmo

// EJERCICIO 3
SubProceso ordenarPorCantidadVendida(tabla)
	definir i, j, posicion Como Entero
	definir pivote Como caracter
	
	// i -> TIENE QUE IR HASTA EL PENULTIMO
	para i=0 Hasta 3-1 Hacer
		pivote = tabla[i, 3]
		posicion = i // guardo la primera posicion
		//  i
		//  0          -> pivote = 10
		// 10 6 5 4 4
		para j = i+1 Hasta 3 Hacer // define cual es el mayor numero
			si (ConvertirANumero(pivote) < ConvertirANumero(tabla[j, 3])) Entonces
				// si PIVOTE es menor que el proximo numero, lo guarda
				pivote = tabla[j, 3] // guardo el mayor valor
				posicion = j // guardo la posicion del mayor
			FinSi
		FinPara
		// necesito ordenar la tabla:
		// cambiarlo de lugar
		aux = tabla[i, 3] // guardo el contenido original de i,3 en auxiliar
		tabla[i, 3] = tabla[posicion, 3] // cambio i,3 por la posicion del mas grande
		tabla[posicion, 3] = aux // cambio el más chico por el auxiliar
	FinPara
	
	Escribir "ORDENADO por VENTA"
	para i = 0 Hasta 3 Hacer
		Escribir tabla[i,3]
	FinPara
FinSubProceso
// -----

// Calcula el IVA a cobrar
SubProceso ivaCalculo(montoTotalSinIVA)
	definir ivaCalculado como real
	ivaCalculado = (montoTotalSinIVA * 0.21)
	Escribir "La cantidad a cobrar de IVA es de: $ ", ivaCalculado;
FinSubProceso

// Calcula el monto total con IVA
Funcion montoConIVA <- calculoIVA(montoTotalSinIVA)
	Definir montoConIVA Como Real
	
	montoConIVA = montoTotalSinIVA + (montoTotalSinIVA * .21);
FinFuncion

// Devuelve el precio * cantidad de cada producto vendido
Funcion montoSinIVA <- calculaCantidad(tabla)
	definir f Como Entero
	definir totalPorProducto, montoSinIVA Como Real
	montoSinIVA = 0;
	
	para f = 0 Hasta 3 Hacer
		Escribir "Se vendió ", tabla[f, 3], " unidades a $ ", tabla[f, 1] " c/u."
		totalPorProducto = ConvertirANumero(tabla[f, 3]) * ConvertirANumero(tabla[f,1])
		montoSinIVA = montoSinIVA + totalPorProducto;
	FinPara
FinFuncion

//Pregunto cant de venta por producto
SubProceso preguntaCantidadVenta(tabla)
	definir f Como Entero
	
	Escribir "Ingrese la cantidad vendida:"
	Para f = 0 Hasta 3 Hacer
		Escribir "Cantidad vendida de: ", tabla[f, 2]
		leer tabla[f, 3]
	FinPara
FinSubProceso

// Cargo tabla:
//	0 - ID
//	1 - precio
//	2 - item
//	3 - cant vendida
SubProceso cargarArreglo(tabla)
	tabla[0,0] = "01"
	tabla[0,1] = "3500.00"
	tabla[0,2] = "Mantel 2x2"
	tabla[0,3] = ""
	tabla[1,0] = "02"
	tabla[1,1] = "800.99"
	tabla[1,2] = "Plato playo 24cm"
	tabla[1,3] = ""
	tabla[2,0] = "03"
	tabla[2,1] = "1450.50"
	tabla[2,2] = "Copa vino"
	tabla[2,3] = ""
	tabla[3,0] = "04"
	tabla[3,1] = "650.50"
	tabla[3,2] = "Plato hondo 22cm"
	tabla[3,3] = ""
FinSubProceso
	