Algoritmo uni4_ejercicio11_array
	definir i, j Como Entero;
	definir nums como real;
	Dimension nums[4, 3];
	
	// arranca primero llenando columnas, luego filas.
	// filas = i
	// columnas = j
	Para j = 0 Hasta 2 Hacer
		para i = 0 Hasta 3 Hacer
			Escribir "Ingresar el valor ", j+1, " Para la fila", i+1;
			leer nums[i, j];
		FinPara
	FinPara
	
FinAlgoritmo
