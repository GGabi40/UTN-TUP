Algoritmo preguntas_respuestas
	definir start, respuestaUsuario Como Caracter;
	definir puntajeUsuario, puntajeTotal, i, n Como Entero;
	Dimensionar pregunta[4];
	Dimensionar respuesta[4];
	
	puntajeUsuario = 0;
	n = 4;
	puntajeTotal = n;
	
	pregunta[1] = 'Hi';
	pregunta[2] = 'How are you?';
	pregunta[3] = 'Fine';
	pregunta[4] = 'Thank you';
	
	respuesta[1] = 'hola';
	respuesta[2] = 'como estas';
	respuesta[3] = 'bien';
	respuesta[4] = 'gracias';
	
	Escribir "¿Arrancamos? (Responder con S o N)";
	leer start;
	
	Si start == 'S' o start == 's' Entonces
		Escribir 'Arranquemos!!'
		Esperar 2 Segundos;
		Limpiar Pantalla
		
		Para i <- 1 Hasta n Con Paso 1 Hacer
			Escribir "Vamos con la pregunta número ", i;
			Escribir "";
			Escribir "Puntaje: ", puntaje, "/", puntajeTotal;
			Escribir "";
			Escribir "Acordáte de escribir SIN signos, SIN tildes y SIN mayúsculas."
			Escribir "La palabra es: ", pregunta[i];
			leer respuestaUsuario;
			
			si respuestaUsuario == respuesta[i] Entonces
				Escribir "Bien!"
				puntaje = puntaje + 1;
			SiNo
				Escribir "Uuh, te equivocaste, la repsuesta era: ", respuesta[i];
			FinSi
			
			Esperar 2 Segundos;
			Limpiar Pantalla
		FinPara
		
		Escribir "El juego terminó y tu puntaje fue de: ", puntaje, "/", puntajeTotal, ". Felicitaciones!";
		
	SiNo
		si start == 'N' o start == 'n' Entonces
			Escribir "Entonces vuelva cuándo te sientas listo."
		SiNo
			Escribir "Comando inválido. Intente nuevamente."
		FinSi
	Fin Si
	
FinAlgoritmo
