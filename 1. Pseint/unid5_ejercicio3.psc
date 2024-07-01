// Realizar un programa que le pida al usuario ingresar los 3 lados de un triángulo e informar si
// es equilátero, isósceles o escaleno. Ésto debe hacerse llamando a un subproceso que reciba
//	los lados como parámetros de entrada y muestre por pantalla el tipo de triángulo (ejemplo "El
//	triángulo ingresado es un escaleno").

Algoritmo unid5_ejercicio3
	definir lado1, lado2, lado3 Como Real
	Escribir "Ingrese el Primer lado: "
	leer lado1;
	Escribir "Ingrese el Segundolado: "
	leer lado2;
	Escribir "Ingrese el Tercer lado: "
	leer lado3;
	
	mostrarTriangulo(lado1, lado2, lado3)
FinAlgoritmo

// por valor: o sea que no hay que cambiar el valor de la variable, sino analizarla (POR DEFECTO)
// por referencia: querés cambiar el valor de la variable
SubProceso mostrarTriangulo(lado1, lado2, lado3)
	si (lado1 == lado2 Y lado2 == lado3) Entonces
		Escribir "Es Equilátero"
	SiNo
		si (lado1 <> lado2 Y lado1 <> lado3 Y lado2 <> lado3) Entonces
			Escribir "Es Escaleno"
		SiNo
			Escribir "Es Isósceles"
		FinSi
	FinSi

FinSubProceso
	