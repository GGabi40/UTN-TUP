Algoritmo Unid3_ejercicio11_combinado
	Definir i, num1, num2, max, lcm Como Entero
	Escribir 'Ingrese 2 numeros para encontrar el minimo comun multiplo: '
	Leer num1, num2
	max <- num1
	Si (num2>num1) Entonces
		max <- num2
	FinSi
	i <- max
	lcm <- i
	Mientras (!(i MOD num1==0 Y i MOD num2==0)) Hacer
		i <- i+max
		lcm <- i
	FinMientras
	Escribir 'MCM de ', num1, ' y ', num2, ' es igual a: ', lcm
	// Los dos c�digos tienen la misma funci�n.
	// El primer c�digo hace que sea m�s evidente la finalizaci�n
	// del bucle Mientras. Por lo que lo hace m�s legible.
	// La elecci�n de c�digo depende del uso que se le de en su entorno,
	// adem�s del criterio del programador y de las necesidades del proyecto.
FinAlgoritmo
