Algoritmo ejercicio_5
	definir cant_Productos, i Como Entero
	definir importe_Total, importe_Unitario, IVA, descuento Como Real
	definir miembro Como Logico;
	
	importe_Total = 0;
	IVA = 0.21;
	
	escribir "Ingrese la cantidad de productos comprados: ";
	leer cant_Productos;
	
	escribir "¿Sos miembro de Toco Plus? (Falso / Verdadero)";
	leer miembro;
	
	para i = 1 Hasta cant_Productos Con Paso 1 Hacer
		escribir "Ingrese el precio del producto: ", i;
		leer importe_Unitario;
		
		importe_Total = importe_Total + importe_Unitario;
	FinPara

	
	si importe_Total > 149999 Y cant_Productos >= 5 Entonces
		escribir "Se ha aplicado 10% de descuento por VALOR o CANTIDAD.";
		descuento = 0.1; // 10%
		importe_Total = importe_Total - (importe_Total * descuento);
	FinSi
	
	si miembro Entonces
		escribir "Se ha aplicado 5% de descuento por MIEMBRO.";
		descuento = 0.05; // 5%
		importe_Total = importe_Total - (importe_Total * descuento);
	FinSi
	
	importe_Total = importe_Total + (importe_Total * IVA);
	Escribir "El costo del IVA es de 21% del total.";
	Escribir "El total a pagar: $", importe_Total;
FinAlgoritmo
