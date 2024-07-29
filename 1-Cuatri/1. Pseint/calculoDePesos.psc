Algoritmo calculoDePesos
	Definir peso, resultado, stop, limpia Como Real
	Definir opcionUsuario Como Cadena
	stop <- 0
	Repetir
		Escribir 'Ingrese el peso en Kg.'
		Leer peso
		Escribir 'Para calcular:'
		Escribir 'En GRAMOS: presione G'
		Escribir 'En LIBRAS: presione L'
		Escribir 'En TONELADAS: presione T'
		Escribir 'En ONZAS: presione O'
		Leer opcionUsuario
		Según opcionUsuario Hacer
			'G' O 'g':
				resultado <- peso*1000
				Escribir peso, ' kg equivalen a: ', resultado, ' gramos.'
			'L' O 'l':
				resultado <- peso*2.205
				Escribir peso, ' kg equivalen a: ', resultado, ' libras.'
			'T' O 't':
				resultado <- peso/1000
				Escribir peso, ' kg equivalen a: ', resultado, ' toneladas.'
			'O' O 'o':
				resultado <- peso*35.274
				Escribir peso, ' kg equivalen a: ', resultado, ' onzas.'
			De Otro Modo:
				Escribir 'La opción ', opcionUsuario, ' no es válida.'
		FinSegún
		Escribir ''
		Escribir '¿Desea detener la ejecución?'
		Escribir 'Para detener: ingrese 1.'
		Escribir 'Para seguir ejecutando: ingrese 0.'
		Leer stop
		Si stop==0 Entonces
			Escribir ''
			Escribir '¿Desea limpiar la pantalla? ingrese 2'
			Escribir 'Si no, ingrese 0'
			Leer limpia
			Si limpia=2 Entonces
				Limpiar Pantalla
			FinSi
		SiNo
			si stop <> 0 Y stop <> 1 Entonces
				Escribir "Opción inválida."
				Escribir "Ingrese 1 para detener O ingrese 0 para seguir ejecutando."
				leer stop;
			FinSi
		FinSi
		
	Hasta Que stop<>0
FinAlgoritmo
