Algoritmo Unid3_ejercicio11_combinado
	Definir i, num1, num2, max, lcm, flag Como Entero
	lcm <- 1
	flag <- 1
	Escribir 'Ingrese 2 números para encontrar el MCM: '
	Leer num1, num2
	Si (num1>num2) Entonces
		max <- num1
	SiNo
		max <- num2
	FinSi
	i <- max
	Mientras (flag==1) Hacer
		Si ((i MOD num1==0) Y (i MOD num2==0)) Entonces
			lcm <- i
			flag <- 0
		FinSi
		i <- i+max
	FinMientras
	Escribir 'MCM de ', num1, ' y ', num2, ' es igual a: ', lcm
	
	// El programa pide que el usuario ingrese 2 numeros enteros,
	// lo guarda en las variables num1 y num2, utiliza la variable
	// flag (bandera) para controlar el flujo del bucle Mientras.
	// Al final del programa se muestra en pantalla el MCM de los
	// dos números ingresados.
FinAlgoritmo
