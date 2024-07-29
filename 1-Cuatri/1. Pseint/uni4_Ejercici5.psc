// Realice un algoritmo que lea en un arreglo las marcas 
// obtenidas por 10 corredores en una carrera e imprimir 
// cuántos tienen una marca mayor, cuántos tienen una 
// marca menor que el promedio y el promedio.
Algoritmo uni4_Ejercici5
	definir marcasCorredores, acc, i, mayores,  menores  Como Entero;
	definir promedio Como Real;
	
	dimension marcasCorredores[10];
	acc = 0;
	
	Para i = 0 Hasta 9 Con Paso 1
		Escribir "Marca del corredor ", i+1;
		leer marcasCorredores[i];
		
		acc = acc + marcasCorredores[i];
	Fin Para
	
	promedio = acc / 10;
	
	para i = 0 Hasta 9 Hacer
		si marcasCorredores[i] > promedio Entonces
			mayores = mayores+1;
		SiNo
			menores = menores+1;
		FinSi
	FinPara
	
	Escribir "La cantidad de marcas mayores fue de: ", mayores;
	Escribir "La cantidad de marcas menores fue de: ", menores;
	Escribir "El promedio general fue de: ", promedio;
	
FinAlgoritmo
