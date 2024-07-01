Algoritmo factorial
	definir num, i, acc, contador Como real;
	
	acc = 1; // arranca en 1 para que pueda multiplicar con contador a cada iteración
	// si arranca en 0, todo el resultado será 0
	
	Escribir "Ingrese un número para conocer su factorial."
	leer num;
	
	Escribir Sin Saltar "El resultado de ", num, "! = "
	
	// si i arranca en 0, tendrá 1 iteración demás
	para i = 1 hasta num con paso 1
		acc = acc * i; // multiplica por cada iteración del bucle
		
		// Descomentar el código abajo para ver las iteraciones del bucle:
		// escribir i,' ', acc;
	Fin Para
	
	Escribir acc;
FinAlgoritmo
