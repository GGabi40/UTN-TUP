Algoritmo notas_cant_no_definida
	definir nota, total Como Real;
	definir acumulador Como Entero;
	definir flag Como Caracter;
	acumulador = 0;
	
	Escribir "Ingrese una nota: ";
	Repetir
		// Validación de nota mayor que 0 y menor que 10.
		Repetir
			Escribir "La nota debe ser igual o mayor que 0, igual o menor que 10."
			leer nota;	
		Hasta Que nota >= 0 Y nota <= 10;
		
		total = total + nota;
		acumulador = acumulador +1;
		
		Escribir "¿Desea finalizar el ingreso de notas?"
		Escribir "Ingrese S para finalizar, ingrese N para continuar."
		leer flag;
	Hasta Que flag == "S" O flag == "s";
	
	Escribir "El promedio es de: ", total / acumulador;
	Escribir "La cantidad de notas ingresadas fue de: ", acumulador;
FinAlgoritmo
