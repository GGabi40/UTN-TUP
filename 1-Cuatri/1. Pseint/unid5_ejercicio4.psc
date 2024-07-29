// Realizar un programa que permita cargar los datos de un cliente, Nombre, apellido, DNI. La
// carga del DNI debe validarse a partir de una funci�n llamada ValidarDNI, dicha funci�n
// recibir� como par�metro de entrada el dni ingresado y devolver� una variable del tipo l�gica
//  Verdadero/Falso. Nota: El DNI debe estar formado por n�meros y tener una longitud m�xima
// 	de 8 caracteres y una longitud m�nima de 6 caracteres.

Algoritmo unid5_ejercicio4
	definir dni, nombre, apellido Como caracter
	definir dniInvalido Como Logico
	
	Escribir "Ingrese nombre: "
	leer nombre
	Escribir "Ingrese apellido: "
	leer apellido
	
	Repetir
		Escribir "Ingrese dni: "
		leer dni
	Mientras Que validarDNI(dni, nombre, apellido)
FinAlgoritmo

Funcion dniInvalido <- validarDNI(dni, nombre, apellido)
	si Longitud(dni) < 6 O Longitud(dni) > 8 Entonces
		dniInvalido = Verdadero
		Escribir "Valor Inv�lido."
	SiNo
		dniInvalido = Falso
		Escribir "Bienvenido/a ", nombre, " ", apellido
	FinSi
FinFuncion
