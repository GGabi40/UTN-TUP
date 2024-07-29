// Busqueda dicotómica -> Debo tener un array ORDENADO
Algoritmo unid6_busqueda_Y_ordenamiento
	definir a, primero, ultimo, indicebuscar, abuscar Como Entero
	definir salir como logico
	Dimension a[10]
	ultimo=9
	primero = 0
	salir = falso
	
	// asigno numeros aleatorios en mi array entre 0 y 10
	para i = 0 Hasta 9 Hacer
		a[i] = aleatorio(0, 10);
	FinPara
	
	ordenarArray(a);
	
	Escribir "Qué buscar?"
	leer abuscar
	
	Repetir
		indicebuscar = trunc((primero+ultimo) / 2) // acorto rango de busqueda
		
		si a[indicebuscar] == abuscar Entonces
			Escribir "Encontró"
			salir = Verdadero
		SiNo
			si (a[indicebuscar] < abuscar) Entonces
				primero = indicebuscar+1;
			SiNo
				ultimo = indicebuscar-1;
			FinSi
		FinSi
	Mientras Que salir = falso Y primero < ultimo
	
FinAlgoritmo

// Cómo ORDENAR un arreglo
Funcion ordenarArray(array Por Referencia)
	definir menorNum, j, i, posicion Como Entero
	
	// el ultimo ya no hace falta ordenarse, entonces 
	// se toma la fila anterior a la ultima: 9-1
	para i = 0 Hasta 9-1 Hacer
		menorNum = array[i];
		// recorre 1 iteración más que i, para ver los proximos numeros
		para j = i+1 Hasta 9 Hacer
			si array[j] < menorNum Entonces
				menorNum = array[j]
				posicion = j // guardo su posicion
			FinSi
		FinPara
		array[posicion] = array[i]
		array[i] = menorNum;
	FinPara
	
	escribirArray(array);
FinFuncion

SubProceso escribirArray(a)
	escribir "Arreglo ORDENADO:";
	para i = 0 Hasta 9 Hacer
		escribir Sin Saltar a[i];
		Escribir Sin Saltar " ";
	FinPara
	escribir "";
	escribir "";
FinSubProceso
	