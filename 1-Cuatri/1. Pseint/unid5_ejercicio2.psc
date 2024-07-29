// Realizar un programa que le pida al usuario que ingrese dos números, luego llamar a una
// función que calcule la suma de ambos y la devuelva al programa principal. 
// Desde el programa principal mostrar el resultado de la suma.
Algoritmo unid5_ejercicio2
	Definir num1, num2, resultado Como Entero
	Escribir "Ingrese 2 numeros enteros: "
	leer num1
	leer num2;
	
	escribir "El resultado de la suma es: ", sumarNumeros(num1, num2)
FinAlgoritmo

//       valor de retorno
Funcion resultado <- sumarNumeros(num1 Por Referencia, num2 Por Referencia)
	resultado = num1 + num2
FinFuncion
	