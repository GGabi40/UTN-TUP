Algoritmo stockMinimo
	definir stock_Producto, stock_Minimo, cant_Vendida Como Entero;
	
	Escribir "Ingrese el stock del producto: ";
	leer stock_Producto
	Escribir "Ingrese el stock m�nimo para recibir una notificaci�n: ";
	leer stock_Minimo
	
	Mientras stock_Producto >= stock_Minimo Hacer
		Escribir "Ingrese la cantidad vendida: ";
		leer cant_Vendida;
		
		stock_Producto = stock_Producto - cant_Vendida;
	FinMientras
	
	escribir "�Atenci�n! Hay que comprar m�s stock.";
FinAlgoritmo
