// Al programa del ejercicio anterior agregarle una nueva 
// funcionalidad para que tambi�n pueda
// buscarse a una persona por apellido+nombre, realizar una b�squeda dicot�mica.

Algoritmo unid6_ejercicio4
	definir personas, dniBuscado, nombreBuscar, apellidoBuscar Como Caracter;
	definir opciones, filas, columnas Como Entero
	filas = 9
	columnas=6
	Dimension personas[filas,columnas]
	
	cargarDatos(personas);
	
	Escribir "Seleccionen una opci�n:"
	escribir "1- Buscar Paciente por DNI"
	escribir "2- Lista de Pacientes ordenada"
	Escribir "3- Buscar Paciente por Apellido y Nombre"
	leer opciones
	
	OrdenPacientes(personas, filas, columnas, 2)
	
	Segun opciones Hacer
		1:
			Escribir "Ingrese el DNI a buscar: "
			leer dniBuscar
			escribirDatos(personas, dniBuscar)
		2:
			escribir "Ordenando lista... "
			escribir ""
			ShowPatients(personas, filas, columnas)
		3:
			Escribir "Ingrese el Apellido del Paciente"
			leer apellidoBuscar
			Escribir "Ingrese el Nombre del Paciente"
			leer nombreBuscar
			
			busquedaNombreYApellido(personas, filas, 2, apellidoBuscar, nombreBuscar)
		De Otro Modo:
			escribir "Opci�n inv�lida. Intente nuevamente."
	FinSegun
	
FinAlgoritmo

// ----- BUSQUEDA DICOT�MICA
SubProceso busquedaNombreYApellido(personas, fil, columna_busc, apellido, nombre)
	Definir ind_sup, ind_inf, ind_med, encontrado, i,posicion Como Entero
	ind_inf = 0
	ind_sup = fil-1

	Repetir
		ind_med = trunc((ind_inf + ind_sup)/2)
		Si personas[ind_med, columna_busc] == apellido Y personas[ind_med, columna_busc-1] == nombre Entonces
			encontrado = 1
			posicion = ind_med
		sino 
			Si personas[ind_med, columna_busc] > apellido Entonces
				ind_sup = ind_med - 1
			SiNo
				ind_inf = ind_med + 1
			FinSi
		FinSi
		
		Escribir Sin Saltar ind_inf
		Escribir " | SUP: ", ind_sup
	Mientras Que encontrado == 0 y ind_inf<=ind_sup

	Si encontrado == 0 Entonces
		Escribir "Paciente No encontrado.. "
	SiNo
		Escribir "Paciente encontrado."
		Escribir ""
		Escribir "Datos del paciente: "
		para i = 1 Hasta 5 Hacer
			escribir Sin Saltar "  -  "
			Escribir Sin Saltar personas[0, i], ": ";
			Escribir personas[posicion, i]
		FinPara
	FinSi
FinSubProceso


// ---- ORDENAR ARREGLO BIDIMENSIONAL
SubProceso OrdenPacientes(personas, f, col, columna_ord)
	Definir i, j, k Como Entero
	definir aux Como Caracter
	
	para i = 1 Hasta f-2 Hacer
		para j = i+1 Hasta f-1 Hacer
			si personas[i, columna_ord] == personas[j, columna_ord] Entonces
				si personas[i, columna_ord-1] > personas[j, columna_ord-1] Entonces
					Para k<-0 Hasta col-1 Con Paso 1 Hacer
						aux = personas[i, k]
						personas[i,k] = personas[j,k]
						personas[j,k] = aux
					Fin Para
				FinSi
			SiNo
				si personas[i, columna_ord] > personas[j, columna_ord] Entonces
					Para k<-0 Hasta col-1 Con Paso 1 Hacer
						aux = personas[i, k]
						personas[i,k] = personas[j,k]
						personas[j,k] = aux
					Fin Para
				FinSi
			FinSi
		FinPara
	FinPara
FinSubProceso

//  ----- Mostrar Lista de Pacientes
SubProceso ShowPatients(personas, f, col)
	Definir i, j Como Entero
	
	para i = 0 Hasta f-1 Hacer
		para j = 1 Hasta col-1 Hacer
			Escribir Sin Saltar personas[i, j]
			Escribir  Sin Saltar " "
		FinPara
		Escribir ""
	FinPara
FinSubProceso

// ---- Buscar x DNI
//                                      array      dni
funcion posicion <- buscarSecuencial(personas, dniBuscar)
	definir i, posicion Como Entero
	
	para i = 1 Hasta 8 Hacer
		si personas[i, 3] == dniBuscar Entonces
			posicion = i
		FinSi
	FinPara
FinFuncion

// 
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
    personas[0,0] = "Posici�n"
    personas[0,1] = "Nombre"
    personas[0,2] = "Apellido"
    personas[0,3] = "DNI"
    personas[0,4] = "Tel�fono"
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
    personas[7,1] = "Jasm�n"
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

