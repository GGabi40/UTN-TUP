// Realizar un programa que permita al usuario de un hospital, 
// buscar a un paciente por el
// número de DNI e informar al usuario los datos de la persona.

Algoritmo unid6_ejercicio1
	definir personas, dniBuscado Como Caracter;
	Dimension personas[9,6]
	
	cargarDatos(personas);
	
	Escribir "Ingrese el DNI a buscar: "
	leer dniBuscar
	
	escribirDatos(personas, dniBuscar)
FinAlgoritmo

//                                      array      dni
funcion posicion <- buscarSecuencial(personas, dniBuscar)
	definir i, posicion Como Entero
	
	para i = 1 Hasta 8 Hacer
		si personas[i, 3] == dniBuscar Entonces
			posicion = i
		FinSi
	FinPara
FinFuncion


SubProceso escribirDatos(personas, dniBuscar)
	Definir paciente, i Como entero
	
	paciente = buscarSecuencial(personas, dniBuscar)
	
	si paciente == 0 Entonces
		Escribir "Paciente no encontrado."
	sino 
		Escribir "Datos del paciente: "
		para i = 1 Hasta 5 Hacer
			escribir Sin Saltar "  -  "
			Escribir Sin Saltar personas[0, i], ": ";
			Escribir personas[paciente, i]
		FinPara
	FinSi
FinSubProceso

SubProceso cargarDatos(personas)
    personas[0,0] = "Posición"
    personas[0,1] = "Nombre"
    personas[0,2] = "Apellido"
    personas[0,3] = "DNI"
    personas[0,4] = "Teléfono"
    personas[0,5] = "Edad"
	
    personas[1,0] = "0"
    personas[1,1] = "Ana"
    personas[1,2] = "Martinez"
    personas[1,3] = "17.123456"
    personas[1,4] = "+541141200011"
    personas[1,5] = "56"
	
    personas[2,0] = "1"
    personas[2,1] = "Camila"
    personas[2,2] = "Noe"
    personas[2,3] = "25.789101"
    personas[2,4] = "+543419485831"
    personas[2,5] = "45"
	
    personas[3,0] = "2"
    personas[3,1] = "Bruno"
    personas[3,2] = "Noe"
    personas[3,3] = "39.121314"
    personas[3,4] = "+541145565789"
    personas[3,5] = "26"
	
    personas[4,0] = "3"
    personas[4,1] = "Dardo"
    personas[4,2] = "Pistilli"
    personas[4,3] = "21.151617"
    personas[4,4] = "+541158637543"
    personas[4,5] = "48"
	
    personas[5,0] = "4"
    personas[5,1] = "Ernestina"
    personas[5,2] = "Quesada"
    personas[5,3] = "33.181920"
    personas[5,4] = "+541161294758"
    personas[5,5] = "35"
	
    personas[6,0] = "5"
    personas[6,1] = "Fausto"
    personas[6,2] = "Ramirez"
    personas[6,3] = "15.212223"
    personas[6,4] = "+543423444567"
    personas[6,5] = "60"
	
    personas[7,0] = "6"
    personas[7,1] = "Jasmín"
    personas[7,2] = "Sosa"
    personas[7,3] = "40.242526"
    personas[7,4] = "+543402512345"
    personas[7,5] = "25"
	
    personas[8,0] = "7"
    personas[8,1] = "Leonardo"
    personas[8,2] = "Tolosa"
    personas[8,3] = "11.272829"
    personas[8,4] = "+541151234567"
    personas[8,5] = "70"
FinSubProceso
