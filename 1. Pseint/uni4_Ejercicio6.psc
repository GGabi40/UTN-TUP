// Realice un algoritmo que lea N elementos y que imprima 
// el n�mero que se repite m�s veces dentro del arreglo.
Algoritmo uni4_Ejercicio6
	definir matriz, contador, i, j, n, numRepetido, maxRepeticiones Como Entero;
	contador = 0;
	maxRepeticiones = 0;
	
	Escribir "Ingrese cu�ntos elementos quiere agregar";
	leer n;
	
	si n <= 0 Entonces
		Escribir "Valor inv�lido. Elemento debe ser mayor que cero.";
	SiNo
		dimension matriz[n];
		
		Para i = 0 Hasta n-1 con paso 1 Hacer
			Escribir "Ingrese un numero entero: ";
			leer matriz[i];
		FinPara
		
		para i = 0 Hasta n-1 Hacer
			contador = 0;
			para j = 0 Hasta n-1 Hacer
				si matriz[i] == matriz[j] Entonces
					contador = contador+1;
				FinSi
			FinPara
			
			si contador > maxRepeticiones Entonces
				maxRepeticiones = contador;
				numRepetido = matriz[i];
			FinSi
		FinPara
		
		
		Escribir "El n�mero m�s repetido fue: ", numRepetido, " se repiti� un total de: ", maxRepeticiones, " veces.";
	FinSi
FinAlgoritmo
