Algoritmo unid3_ejercicio_legajo
	definir nombre, apellido Como Caracter
	definir legajo, opc, turno Como Entero
	definir invalido Como Logico
	
	invalido = falso;
	
	Escribir "Ingrese su nombre: "
	leer nombre;
	Escribir "Ingrese su apellido: "
	leer apellido;
	
	Repetir
		Escribir "Ingrese su Legajo: ";
		leer legajo;
	Mientras Que legajo < 10000 O legajo > 99999
	
	Escribir "Ingrese la materia que desea recursar:";
	Escribir "1- Programacion; 2- Matematica; 3- Sistemas";
	leer opc;
	
	segun opc Hacer
		1:
			Escribir "Seleccionado: PROGRAMACI�N";
		2:
			Escribir "Seleccionado: MATEM�TICA";
		3:
			Escribir "Seleccionado: SISTEMAS";
		De Otro Modo:
			Escribir "Opci�n INV�LIDA."
			invalido = Verdadero
	FinSegun
	
	si invalido Entonces
		Escribir "Intente nuevamente."
	SiNo
		Repetir
			Escribir "Ingrese el turno que desea cursar: ";
			Escribir "1- ma�ana; 2- tarde; 3- noche"
			leer turno
		Mientras Que turno <> 1 Y turno <> 2 Y turno <> 3
		
		Escribir "Su incripci�n fue realizada correctamente.";
	FinSi
FinAlgoritmo
