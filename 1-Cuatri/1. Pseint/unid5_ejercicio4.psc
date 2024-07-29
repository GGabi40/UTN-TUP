// Realizar un programa que permita cargar los datos de un cliente, Nombre, apellido, DNI. La
// carga del DNI debe validarse a partir de una función llamada ValidarDNI, dicha función
// recibirá como parámetro de entrada el dni ingresado y devolverá una variable del tipo lógica
//  Verdadero/Falso. Nota: El DNI debe estar formado por números y tener una longitud máxima
// 	de 8 caracteres y una longitud mínima de 6 caracteres.

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
		Escribir "Valor Inválido."
	SiNo
		dniInvalido = Falso
		Escribir "Bienvenido/a ", nombre, " ", apellido
	FinSi
FinFuncion
