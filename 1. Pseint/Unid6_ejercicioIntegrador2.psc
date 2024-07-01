Algoritmo Unid6_ejercicioIntegrador2
	definir tabla Como Caracter
	definir dtoTotal Como Real
	Dimension tabla[3, 3]
	
	cargarArreglo(tabla)
	cargaMontoVendido(tabla)
	dtoTotal = calculaDescuentos(tabla)
	
	Escribir "El monto total de descuento realizado es de $ ", dtoTotal;
FinAlgoritmo

// Carga monto total vendido x cada medio de pago
SubProceso cargaMontoVendido(tabla)
	definir f Como Entero
	para f = 0 Hasta 2 Hacer
		Escribir "Ingrese total $ vendido con ", tabla[f, 0]
		leer tabla[f, 2]
	FinPara
FinSubProceso

// Calcula monto de descuento x cada Medio de pago
// Retorna total descontado por todos los MP
Funcion descuentoTotal <- calculaDescuentos(tabla)
	definir f Como Entero
	definir descuentoTotal, descuentoXMp Como Real
	
	descuentoTotal = 0
	
	Para f = 0 Hasta 2 Hacer
		// desc x MP            monto x MP          *       descuento
		descuentoXMp = ConvertirANumero(tabla[f,2]) * ConvertirANumero(tabla[f,1])
		Escribir "El descuento por ", tabla[f,0], " es de: $ ", descuentoXMp
		descuentoTotal = descuentoTotal + descuentoXMp
		descuentoXMp = 0
	FinPara
	
FinFuncion

// 0 - MP
// 1 - descuento
// 2 - monto x MP
SubProceso cargarArreglo(tabla)
	tabla[0,0] = "Efectivo"
	tabla[0,1] = "0.15"
	tabla[0,2] = ""
	tabla[1,0] = "Débito"
	tabla[1,1] = "0.10"
	tabla[1,2] = ""
	tabla[2,0] = "Crédito"
	tabla[2,1] = "0"
	tabla[2,2] = ""
FinSubProceso
	