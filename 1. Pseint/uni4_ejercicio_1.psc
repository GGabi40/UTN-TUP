
//1. Realice un pseudoc�digo que permita sumar los elementos de dos arreglos y 
//guarde el resultado en otro arreglo. Deber� imprimir el arreglo resultante,
//el tama�o del arreglo ser� introducido por el usuario, se debe comprobar que
//el tama�o del arreglo sea v�lido, es decir, no permitir valores negativos y
//que sea mayor que 2.

Algoritmo uni4_ejercicio_1
	definir matriz, matriz_dos,matriz_resultado, elementos Como Entero
	definir i, j Como Entero;
	
	Repetir
		Escribir "Ingrese la cantidad de elementos que desea: "
		leer elementos;
	Mientras Que elementos <= 2 
	
	Dimension matriz[elementos], matriz_dos[elementos], matriz_resultado[elementos];
	
	para i = 0 Hasta elementos-1 Con Paso 1 Hacer
		Escribir "Ingrese el elemento ", i+1, " del PRIMER arreglo: "
		leer matriz[i]
	FinPara
	
	para j = 0 Hasta elementos-1 Con Paso 1 Hacer
		Escribir "Ingrese el elemento ", j+1, " del SEGUNDO arreglo: ";
		leer matriz_dos[j];
	FinPara
	
	para i = 0 Hasta elementos-1 Con Paso 1 Hacer
		matriz_resultado[i] = matriz[i] + matriz_dos[i];
	FinPara
	
	para i = 0 Hasta elementos-1 Con Paso 1 Hacer
		Escribir Sin Saltar matriz_resultado[i], " - " ;
	FinPara
	
FinAlgoritmo
