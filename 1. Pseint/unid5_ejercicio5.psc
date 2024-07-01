// Realizar un programa que le pida al usuario que ingrese una lista de 10 alumnos y 
// los resultados del examen final. Luego el programa llamará a una función que
// calcula el promedio de notas, a otra función que calcula la mayor nota,
// y otra que calcula la menor nota. Luego el sistema informará estos 
// 3 valores al usuario.

Algoritmo unid5_ejercicio5
	definir i Como Entero
	definir notas_alummos, acumulador, promedio, mayor_nota, menor_nota Como Real
	Dimension notas_alummos[10]
	
	acumulador = 0
	
	Para i = 0 Hasta 9 Con Paso 1 Hacer
		Escribir "Ingrese la nota del alumno ", i+1
		leer notas_alummos[i]
		acumulador = acumulador + notas_alummos[i]
		mayor_nota = calcular_mayor_nota(notas_alummos[i], i, mayor_nota)
		menor_nota = calcular_menor_nota(notas_alummos[i], i, menor_nota)
	FinPara
	
	promedio = calcular_Promedio(acumulador)
	
	Escribir "El promedio general: ", promedio
	Escribir "La mayor nota fue de: ", mayor_nota
	Escribir "La menor nota fue de: ", menor_nota
	
FinAlgoritmo

// calculo promedio
funcion promedio <- calcular_Promedio(acumulador)
	promedio = acumulador / 10
FinFuncion

// Devuelve la mayor nota
funcion mayor_nota <- calcular_mayor_nota(nota, i, mayor_nota)
	Si (i == 0) Entonces
		mayor_nota = nota
	SiNo
		Si (nota > mayor_nota) Entonces
			mayor_nota = nota
		FinSi
	FinSi
FinFuncion

// Devuelve la menor nota
funcion menor_nota <- calcular_menor_nota(nota, i, menor_nota)
	si (i == 0) Entonces
		menor_nota = nota;
	SiNo
		Si (nota < menor_nota) Entonces
			menor_nota = nota
		FinSi
	FinSi
FinFuncion