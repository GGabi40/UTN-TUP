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
	// Los dos códigos tienen la misma función.
	// El primer código hace que sea más evidente la finalización
	// del bucle Mientras. Por lo que lo hace más legible.
	// La elección de código depende del uso que se le de en su entorno,
	// además del criterio del programador y de las necesidades del proyecto.
FinAlgoritmo
