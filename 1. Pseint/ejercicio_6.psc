Algoritmo ejercicio_6
	definir cant_Estudiantes, cant_ActividadesExtracurriculares, cant_ActivPorAlumno, i Como Entero
	definir mayorCantidadActividades, acumulador Como Entero;
	definir legajo, mayor_activ_legajo Como Caracter
	
	acumulador = 0;
	
	Escribir "Ingrese la cantidad de alumnos: ";
	leer cant_Estudiantes;
	
	Para i = 1 Hasta cant_Estudiantes Con Paso 1 Hacer
		escribir "Legajo del estudiante ", i;
		leer legajo;
		
		escribir "Ingrese cantidad de actividades en la que participa: "
		leer cant_ActivPorAlumno;
		
		si i = 1 Entonces
			mayorCantidadActividades = cant_ActivPorAlumno;
			mayor_activ_legajo = legajo;
		SiNo
			si cant_ActivPorAlumno > mayorCantidadActividades Entonces
				mayorCantidadActividades = cant_ActivPorAlumno;
				mayor_activ_legajo = legajo;
			FinSi
		FinSi
		
		si cant_ActivPorAlumno > 5 Entonces
			acumulador = acumulador + 1;
		FinSi
	FinPara
	
	escribir Sin Saltar "Legajo de más activ: ", mayor_activ_legajo;
	Escribir  "";
	escribir Sin Saltar "La cantidad de alumnos que participó en más de 5 actividades es: ", acumulador
	Escribir  "";

FinAlgoritmo
