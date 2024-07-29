// -- 1
// Realizar un programa que permita al usuario de un hospital, 
// buscar a un paciente por el
// número de DNI e informar al usuario los datos de la persona.
// -- 2
// Al programa del ejercicio anterior agregarle una 
// nueva funcionalidad para que el usuario
// pueda pedir al sistema la lista de personas con 
// sus datos ordenadas por apellido. (debe
// invocarse a un procedimiento que reciba un arreglo 
// como parámetro ejemplo:
// ShowPatients(patients)
// -- 3
// Al programa del ejercicio anterior modificarle la funcionalidad 
// que muestra la lista de personas
// ordenadas por apellido, además debe estar ordenado por apellido+nombre
// -- 4
// Al programa del ejercicio anterior agregarle una nueva 
// funcionalidad para que también pueda
// buscarse a una persona por apellido+nombre, realizar una búsqueda dicotómica.
// -- 5
// Al programa del ejercicio anterior agregarle una nueva funcionalidad, 
// para que el usuario
// pueda decidir si quiere ver la lista de todos los 
// pacientes ordenada por edad o por
// apellido+nombre. Debe llamarse a un procedimiento que 
// reciba un arreglo y un tipo de
// ordenamiento como parámetro, ejemplo ShowPatients(patients, order_type) 
// y order_type
// puede contener tener los valores "by_name" o "by_age
Algoritmo unid6_ej1_refactorizado
	Definir personas, dniBuscado, apellidoBuscar, nombreBuscar Como Cadena
	Definir buscaDNI, opciones, filas, columnas, salir, eleccion Como Entero
	buscaDNI <- 0
	filas <- 9
	columnas <- 6
	Dimensionar personas(filas,columnas)
	cargarDatos(personas)
	Repetir
		Escribir ''
		Escribir 'Seleccionen una opción:'
		Escribir '0- Salir'
		Escribir '1- Buscar Paciente por DNI'
		Escribir '2- Lista de Pacientes ordenada'
		Escribir '3- Buscar Paciente por Apellido y Nombre'
		Escribir '4- Elegir Ordenamiento'
		Leer opciones
		Según opciones Hacer
			0:
				Escribir 'Hasta pronto.'
				salir <- 1
			1:
				dniBuscado <- pedirDNI(personas)
				buscaDNI <- buscarSecuencial(personas,dniBuscado)
				escribirDatos(personas,buscaDNI)
			2:
				Escribir 'Ordenando lista... '
				Escribir ''
				mostrarPacientesOrdenados(personas,filas,columnas)
			3:
				OrdenPacientes(personas,filas,columnas,2)
				Escribir 'Ingrese el Apellido del Paciente'
				Leer apellidoBuscar
				Escribir 'Ingrese el Nombre del Paciente'
				Leer nombreBuscar
				busquedaNombreYApellido(personas,filas,2,apellidoBuscar,nombreBuscar)
			4:
				Escribir 'Ingrese cómo desea ordenar la lista:'
				Escribir '1- Ordenar por Edad'
				Escribir '2- Ordenar por Nombre'
				Leer eleccion
				Si (eleccion==1) Entonces
					OrdenPacientes(personas,filas,columnas,5)
					mostrarPacientesOrdenados(personas,filas,columnas)
				SiNo
					Si (eleccion==2) Entonces
						OrdenPacientes(personas,filas,columnas,2)
						mostrarPacientesOrdenados(personas,filas,columnas)
					SiNo
						Escribir 'Elección inválida.'
					FinSi
				FinSi
			De Otro Modo:
				Escribir 'Opción inválida. Intente nuevamente.'
		FinSegún
	Mientras Que salir<>1
FinAlgoritmo

// -- FUNCIONES Y SUBPROCESOS
// Devuelve el DNI que se desea buscar
Función dniBuscar <- pedirDNI(pacientes)
	Escribir 'Ingrese el DNI a buscar: '
	Leer dniBuscar
FinFunción

// Muestra pacientes ordenados
Función mostrarPacientesOrdenados(pacientes,f,col)
	Definir i, j Como Entero
	Para i<-0 Hasta f-1 Hacer
		Para j<-1 Hasta col-1 Hacer
			Escribir '  |  'Sin Saltar
			Escribir pacientes[i,j]Sin Saltar
		FinPara
		Escribir ' |'Sin Saltar
		Escribir ''
	FinPara
FinFunción

// Devuelve la posicion del paciente q corresponde el dni
Función posicion <- buscarSecuencial(pacientes,dni)
	Definir i, posicion Como Entero
	Para i<-1 Hasta 8 Hacer
		Si pacientes[i,3]==dni Entonces
			posicion <- i
		FinSi
	FinPara
FinFunción

// --- Escribe datos del paciente
Función escribirDatos(pacientes,posicionBuscar)
	Definir i Como Entero
	Si posicionBuscar<>0 Entonces
		Escribir 'Datos del paciente: '
		Para i<-1 Hasta 5 Hacer
			Escribir '  -  'Sin Saltar
			Escribir pacientes[0,i], ': 'Sin Saltar
			Escribir pacientes[posicionBuscar,i]
		FinPara
	SiNo
		Escribir 'No encontrado.'
	FinSi
FinFunción

// ---- ORDENAR ARREGLO POR APELLIDO
Función OrdenPacientes(personas,f,col,columna_ord)
	Definir i, j, k Como Entero
	Definir aux Como Cadena
	Para i<-1 Hasta f-2 Hacer
		Para j<-i+1 Hasta f-1 Hacer
			Si personas[i,columna_ord]==personas[j,columna_ord] Entonces
				Si personas[i,columna_ord-1]>personas[j,columna_ord-1] Entonces
					Para k<-0 Hasta col-1 Con Paso 1 Hacer
						aux <- personas[i,k]
						personas[i,k]<-personas[j,k]
						personas[j,k]<-aux
					FinPara
				FinSi
			SiNo
				Si personas[i,columna_ord]>personas[j,columna_ord] Entonces
					Para k<-0 Hasta col-1 Con Paso 1 Hacer
						aux <- personas[i,k]
						personas[i,k]<-personas[j,k]
						personas[j,k]<-aux
					FinPara
				FinSi
			FinSi
		FinPara
	FinPara
FinFunción

// BÚSQUEDA DICOTÓMICA por Nombre y Apellido
Función busquedaNombreYApellido(personas,fil,columna_busc,apellido,nombre)
	Definir ind_sup, ind_inf, ind_med, encontrado, i, posicion Como Entero
	ind_inf <- 0
	ind_sup <- fil-1
	Repetir
		ind_med <- trunc((ind_inf+ind_sup)/2)
		Si personas[ind_med,columna_busc]==apellido Y personas[ind_med,columna_busc-1]==nombre Entonces
			encontrado <- 1
			posicion <- ind_med
		SiNo
			Si personas[ind_med,columna_busc]>apellido Entonces
				ind_sup <- ind_med-1
			SiNo
				ind_inf <- ind_med+1
			FinSi
		FinSi
	Mientras Que encontrado==0 Y ind_inf<=ind_sup
	Si encontrado==0 Entonces
		escribirDatos(personas,0)
	SiNo
		Escribir 'Paciente encontrado.'
		Escribir ''
		escribirDatos(personas,posicion)
	FinSi
FinFunción

// Carga datos de pacientes
Función cargarDatos(personas)
	personas[0,0]<-'Posición'
	personas[0,1]<-'Nombre'
	personas[0,2]<-'Apellido'
	personas[0,3]<-'DNI'
	personas[0,4]<-'Teléfono'
	personas[0,5]<-'Edad'
	personas[1,0]<-'0'
	personas[1,1]<-'Ana'
	personas[1,2]<-'Zartinez'
	personas[1,3]<-'17.123456'
	personas[1,4]<-'+541141200011'
	personas[1,5]<-'56'
	personas[2,0]<-'1'
	personas[2,1]<-'Camila'
	personas[2,2]<-'Noe'
	personas[2,3]<-'25.789101'
	personas[2,4]<-'+543419485831'
	personas[2,5]<-'45'
	personas[3,0]<-'2'
	personas[3,1]<-'Bruno'
	personas[3,2]<-'Noe'
	personas[3,3]<-'39.121314'
	personas[3,4]<-'+541145565789'
	personas[3,5]<-'26'
	personas[4,0]<-'3'
	personas[4,1]<-'Zardo'
	personas[4,2]<-'Pistilli'
	personas[4,3]<-'21.151617'
	personas[4,4]<-'+541158637543'
	personas[4,5]<-'35'
	personas[5,0]<-'4'
	personas[5,1]<-'Ernestina'
	personas[5,2]<-'Quesada'
	personas[5,3]<-'33.181920'
	personas[5,4]<-'+541161294758'
	personas[5,5]<-'35'
	personas[6,0]<-'5'
	personas[6,1]<-'Fausto'
	personas[6,2]<-'Ramirez'
	personas[6,3]<-'15.212223'
	personas[6,4]<-'+543423444567'
	personas[6,5]<-'60'
	personas[7,0]<-'6'
	personas[7,1]<-'Jasmín'
	personas[7,2]<-'Sosa'
	personas[7,3]<-'40.242526'
	personas[7,4]<-'+543402512345'
	personas[7,5]<-'02'
	personas[8,0]<-'7'
	personas[8,1]<-'Leonardo'
	personas[8,2]<-'Tolosa'
	personas[8,3]<-'11.272829'
	personas[8,4]<-'+541151234567'
	personas[8,5]<-'70'
FinFunción
