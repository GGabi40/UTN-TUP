Algoritmo unid5_ejercicio6
	definir arreglo Como Caracter
	definir opc Como Entero
	Dimension arreglo[11, 2] // 11 filas y 2 columnas
	
	cargarArreglo(arreglo)
	
	Repetir
		Escribir "MENÚ:"
		Escribir "Ingrese 1- Mostrar lista de corredores 2 - Mostrar los tres mejores 3- Mostrar lista de completa de resutados 4 - salir."
		leer opc;
		
		Segun opc Hacer
			1:
				ListaCorredores(arreglo[11, 2])
			2:
				//
			3:
				//
			4:
				// 
			De Otro Modo:
				Escribir "Ingrese una opción válida."
		Fin Segun
	Mientras Que opc <> 1 Y opc <> 2 Y opc <> 3 Y opc <> 4
	
	
FinAlgoritmo

SubProceso ListaCorredores(arreglo Por Valor)
	definir i, j como entero
	Escribir "La Lista de Corredores:"
	
	Para i = 0 Hasta 10 con paso 1 hacer
		para j = 0 Hasta 1 Con Paso 1 Hacer
			si i == 0 y j == 0 Entonces
				Escribir Sin Saltar arreglo[i, j]
			SiNo
				Escribir Sin Saltar arreglo[i, j], " "
			FinSi
		FinPara
		Escribir ""
	FinPara
	
FinSubProceso

SubProceso cargarArreglo(arreglo Por Referencia)
	arreglo[0, 0] = "Corredor"
	arreglo[0, 1] = "Posición Final"
	
	arreglo[1, 0] = "Pedro Gomez"
	arreglo[1, 1] = "7"
	
	arreglo[2, 0] = "Martín Ceres"
	arreglo[2, 1] = "6"
	
	arreglo[3, 0] = "Ernestina Diaz"
	arreglo[3, 1] = "1"
	
	arreglo[4, 0] = "Gastón Bautista"
	arreglo[4, 1] = "2"
	
	arreglo[5, 0] = "Dalma Alvarez"
	arreglo[5, 1] = "8"
	
	arreglo[6, 0] = "Patricio Fernandez"
	arreglo[6, 1] = "3"
	
	arreglo[7, 0] = "Faustina Martinez"
	arreglo[7, 1] = "10"
	
	arreglo[8, 0] = "Andrea Perez"
	arreglo[8, 1] = "9"
	
	arreglo[9, 0] = "Hilda Lopez"
	arreglo[9, 1] = "4"
	
	arreglo[10, 0] = "León García"
	arreglo[10, 1] = "5"
FinSubProceso
	