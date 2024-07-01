Algoritmo mayor_menor_Validacion
	definir num, numMayor, numMenor, i Como Entero
	
	Para i = 1 Hasta 5 Con Paso 1 Hacer
		Escribir "Ingrese un numero: ";
		Repetir
			leer num;
		Hasta Que num > 0 // valida hasta que ingrese un numero mayor que 0
		
		si i == 1 Entonces
			numMayor = num;
			numMenor = num;
		FinSi
		
		si num > numMayor Entonces
			numMayor = num;
		FinSi
		
		si num < numMenor Entonces
			numMenor = num;
		FinSi
	FinPara
	
	Escribir "El número más grande fue: ", numMayor;
	Escribir "El número más chico fue: ", numMenor;
FinAlgoritmo
