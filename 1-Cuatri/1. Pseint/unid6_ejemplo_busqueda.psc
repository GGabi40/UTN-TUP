Algoritmo unid6_ejemplo_busqueda
	definir array, i, num, contador,cantMax Como Entero
	cantMax = 10
	dimension array[cantMax]
	contador=0
	
	// asigno numeros aleatorios en mi array entre 0 y 10
	para i = 0 Hasta cantMax-1 Hacer
		array[i] = aleatorio(0, 10);
	FinPara
	
	escribirArray(array);
	
	Escribir "Qué numero desea buscar?"
	leer num;
	
	// busca correspondencias
	para i = 0 Hasta cantMax-1 Hacer
		si array[i] == num Entonces
			contador = contador+1;
		FinSi
	FinPara
	
	si contador == 0 Entonces
		Escribir "No se encontraron resultados."
	SiNo
		Escribir "Encontré ", contador, " resultados."
	FinSi
FinAlgoritmo

SubProceso escribirArray(a)
	escribir "Arreglo NO ordenado:";
	para i = 0 Hasta 9 Hacer
		escribir Sin Saltar a[i];
		Escribir Sin Saltar " ";
	FinPara
	escribir "";
	escribir "";
FinSubProceso
