Algoritmo unid3_anexo_ejercicio_1
	definir contra_G, contra, contador Como Entero;
	definir usuario, usuario_G Como Caracter;
	
	contador = 1;
	usuario_G = "gabi";
	contra_G = 123;
	
	// o uno es distinto o el otro es distinto
	// Otra opción: NO (usuario == usuario_G Y contra == contra_G)
	Mientras (usuario <> usuario_G O contra <> contra_G) Y contador <= 3 Hacer
		escribir "Intento: ", contador;
		
		Escribir Sin Saltar "Ingrese usuario:"
		leer usuario;
		Escribir Sin Saltar "Ingrese contraseña:"
		leer contra
		
		contador = contador + 1;
	FinMientras
	
	si (usuario == usuario_G Y contra == contra_G) O contador <= 3 Entonces
		Limpiar Pantalla
		contador = 0;
		Escribir "Bienvenido/a!";
	SiNo
		Escribir "Agotó la cantidad de intentos."
	FinSi
FinAlgoritmo
