Algoritmo ejercicio_4
	definir i Como Entero;
	definir num_Empleados_marketing Como Entero
	definir horas, cant_Horas_marketing Como entero;
	definir total_Horas_Maniana, total_Horas_Tarde Como Entero;
	definir turno Como Caracter;
	
	Escribir "DEPARTAMENTO MARKETING: "
	Escribir "Ingrese la cantidad de trabajadores de este DPTO:"
	leer num_Empleados_marketing;
	
	Para i = 1 Hasta num_Empleados_marketing Con Paso 1 Hacer
		Escribir "DEPARTAMENTO MARKETING";
		Escribir "Ingrese las horas trabajadas:", i;
		Leer horas;
		Escribir "Ingrese su turno? (M / T) ", i
		leer turno;
		
		si (turno == 'M' O turno == 'm') Entonces
			total_Horas_Maniana = total_Horas_Maniana + horas;
		SiNo
			si (turno == 'T' O turno == 't') Entonces
				total_Horas_Tarde = total_Horas_Tarde + horas;
			FinSi
		FinSi
		
		cant_Horas_marketing = total_Horas_Tarde + total_Horas_Maniana;
	Fin Para
	
	Escribir "";
	Escribir "El total de horas trabajadas en marketing es: ", cant_Horas_marketing;
	
	Escribir "El total de horas trabajadas a la mañana es: ", total_Horas_Maniana;
	Escribir "El total de horas trabajadas a la tarde es: ", total_Horas_Tarde;
	
FinAlgoritmo
