Algoritmo Unid3_Angulos_Triangulo
	definir ang1, ang2 Como real;
	
	Repetir
		Escribir "Ingrese un �ngulo del tri�ngulo: "
		leer ang1;
	Mientras Que ang1 >= 180 O ang1 <= 0
	
	Repetir
		Escribir "Ingrese el segundo �ngulo del tri�ngulo: "
		leer ang2;
	Mientras Que (ang2 >= 180 O ang2 <= 0) O ang1 + ang2 >= 180
	
	si ( ang1 + ang2 == 90 o ang1 == 90 o ang2 == 90 ) Entonces
		Escribir "Triangulo rect�ngulo."
	SiNo
		si (ang1>90 o ang > 90 o ang1 + ang2 < 90) Entonces
			Escribir "Triangulo obtusangulo"
		SiNo
			Escribir "Triangulo Acutangulo."
		FinSi
	FinSi
FinAlgoritmo
