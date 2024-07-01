Algoritmo uni3_ejercicioCombinado8
	Definir num_corredor, num_vueltas, cant_corredores, num_mejor_corredor, i, j Como entero
	definir marca como real
	Definir promedio_general, promedio_vuelta, mejor_promedio Como real
	
	acumulador_promedio = 0;
	num_vueltas = 3;
	
	Repetir
		Escribir "Ingrese la cantidad de corredores: "
		leer cant_corredores
	Mientras Que cant_corredores <= 1
	
	Para i = 0 Hasta num_vueltas-1 Con Paso 1 Hacer
		Escribir "Vuelta numero ", i+1;
		promedio_vuelta = 0;
		
		para j = 0 Hasta cant_corredores-1 Con Paso 1 Hacer
			// El número del corredor es un entero entre [2000, 3000]
			Repetir
				Escribir "Ingresar numero de corredor: "
				leer num_corredor;
			Mientras Que num_corredor < 2000 O num_corredor > 3000
			
			Escribir "Ingrese la marca del corredor ", j+1, " para la vuelta ", i+1
			leer marca
			
			promedio_vuelta = marca + promedio_vuelta
			promedio_general = marca + promedio_general
			
			si (i == 0 Y j == 0) Entonces
				mejor_promedio = marca
				num_mejor_corredor = num_corredor
			SiNo
				si (marca < mejor_promedio) Entonces
					mejor_promedio = marca
					num_mejor_corredor = num_corredor
				FinSi
			FinSi
		FinPara
		
		Escribir "El promedio de la vuelta ", i+1, " fue de: ", promedio_vuelta / cant_corredores;
	FinPara
	
	Escribir "El promedio general de la carrera fue de: ", promedio_general / (3 * cant_corredores)
	Escribir "La menor marca es del corredor ", num_mejor_corredor, ". Su tiempo fue de: ", mejor_promedio
	
FinAlgoritmo
