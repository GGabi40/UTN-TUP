Algoritmo factorial
	definir num, i, acc, contador Como real;
	
	acc = 1; // arranca en 1 para que pueda multiplicar con contador a cada iteraci�n
	// si arranca en 0, todo el resultado ser� 0
	
	Escribir "Ingrese un n�mero para conocer su factorial."
	leer num;
	
	Escribir Sin Saltar "El resultado de ", num, "! = "
	
	// si i arranca en 0, tendr� 1 iteraci�n dem�s
	para i = 1 hasta num con paso 1
		acc = acc * i; // multiplica por cada iteraci�n del bucle
		
		// Descomentar el c�digo abajo para ver las iteraciones del bucle:
		// escribir i,' ', acc;
	Fin Para
	
	Escribir acc;
FinAlgoritmo
