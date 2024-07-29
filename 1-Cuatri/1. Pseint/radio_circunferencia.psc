Algoritmo radio_circunferencia
	definir radio, perimetro, area, volumen Como Real;
	
	escribir "Ingrese el Radio de la Esfera:"
	leer radio;
	
	perimetro = PI * 2 * radio;
	area = 4 * PI * radio^2;
	volumen = 4/3 * PI * radio^3;
	
	escribir "El resultado de Perimetro es: ", perimetro;
	escribir "El resultado de area es: ", area;
	escribir "El resultado de volumen es: ", volumen;
	
FinAlgoritmo
