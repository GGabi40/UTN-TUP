Algoritmo fecha_Nacimiento
	definir diaNacimiento, mesNacimiento, anioNacimiento Como Entero;
	definir diaActual, mesActual, anioActual Como Entero;
	
	Escribir "¿Qué día, mes y año estamos? Presione ENTER para cada valor ingresado"
	leer diaActual, mesActual, anioActual
	
	Escribir "¿Qué día mes y año es tu cumpleaños? Presione ENTER para cada valor ingresado"
	Leer diaNacimiento, mesNacimiento, anioNacimiento
	
	edad = anioActual - anioNacimiento;
	
	si mesActual < mesNacimiento Entonces
		edad = edad -1;
	sino 
		si mesActual == mesNacimiento y diaActual < diaNacimiento Entonces
			edad = edad-1;
		FinSi
	FinSi
	
	si mesActual == mesNacimiento y diaActual == diaNacimiento Entonces
		escribir "Es tu cumpleaños! Felicitaciones por tus ", edad, " años!";
	SiNo
		Escribir "Tiene: ", edad, " años.";
	FinSi
	
FinAlgoritmo
