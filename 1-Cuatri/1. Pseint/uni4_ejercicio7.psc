Algoritmo uni4_ejercicio7
	definir i, j Como Entero;
	definir matriz Como Caracter
	dimension matriz[3, 4];
	
	matriz[0, 0] = "Argentina";
	matriz[0, 1] = "Buenos Aires";
	matriz[0, 2] = "Rosario";
	matriz[0, 3] = "Córdoba";
	
	matriz[1, 0] = "Colombia";
	matriz[1, 1] = "Cali";
	matriz[1, 2] = "Bogotá";
	matriz[1, 3] = "Santa Marta";
	
	matriz[2, 0] = "Brasil";
	matriz[2, 1] = "Brasilia";
	matriz[2, 2] = "Río de Janeiro";
	matriz[2, 3] = "San Pablo";
	
	
	Para i = 0 Hasta 2 Hacer
		para j = 0 Hasta 3 Hacer
			Escribir Sin Saltar matriz[i, j], " | ";
		FinPara
		Escribir "";
	FinPara
	
FinAlgoritmo
