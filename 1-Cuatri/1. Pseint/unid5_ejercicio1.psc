Algoritmo unid5_ejercicio1
	definir nombre, apellido Como Caracter
	definir edad Como Entero
	pedirDatos(nombre, apellido, edad)
	mostrarDatos(nombre, apellido, edad)
FinAlgoritmo

// por referencia: Quiero que cambie el valor de mi variable "principal"
// se debe poner en cada variable.
SubProceso pedirDatos(nombre Por Referencia, apellido Por Referencia, edad Por Referencia)
	Escribir "Ingrese nombre: "
	leer nombre
	Escribir "Ingrese apellido: "
	leer apellido
	Escribir "Ingrese edad: "
	leer edad
FinSubProceso

// por valor: por defecto
// por valor: Cuando no hace falta modificar ningún valor 
SubProceso mostrarDatos(nombre, apellido, edad)
	Escribir "Los datos: "
	Escribir nombre, " ",apellido, ". Tiene: ", edad, " años."
FinSubProceso
	