Algoritmo fecha_Nacimiento
	definir diaNacimiento, mesNacimiento, anioNacimiento Como Entero;
	definir diaActual, mesActual, anioActual Como Entero;
	
	Escribir "�Qu� d�a, mes y a�o estamos? Presione ENTER para cada valor ingresado"
	leer diaActual, mesActual, anioActual
	
	Escribir "�Qu� d�a mes y a�o es tu cumplea�os? Presione ENTER para cada valor ingresado"
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
		escribir "Es tu cumplea�os! Felicitaciones por tus ", edad, " a�os!";
	SiNo
		Escribir "Tiene: ", edad, " a�os.";
	FinSi
	
FinAlgoritmo
