// Realizar un programa que le pida al usuario ingresar los 3 lados de un tri�ngulo e informar si
// es equil�tero, is�sceles o escaleno. �sto debe hacerse llamando a un subproceso que reciba
//	los lados como par�metros de entrada y muestre por pantalla el tipo de tri�ngulo (ejemplo "El
//	tri�ngulo ingresado es un escaleno").

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
// por referencia: quer�s cambiar el valor de la variable
SubProceso mostrarTriangulo(lado1, lado2, lado3)
	si (lado1 == lado2 Y lado2 == lado3) Entonces
		Escribir "Es Equil�tero"
	SiNo
		si (lado1 <> lado2 Y lado1 <> lado3 Y lado2 <> lado3) Entonces
			Escribir "Es Escaleno"
		SiNo
			Escribir "Es Is�sceles"
		FinSi
	FinSi

FinSubProceso
	