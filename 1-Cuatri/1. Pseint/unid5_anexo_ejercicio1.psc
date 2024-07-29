Algoritmo unid5_anexo_ejercicio1
	definir marca_masculino, marca_femenino, promedio_general_fem, promedio_general_masc Como Real
	definir cant_corredores, anio Como Entero
	
	Escribir "Ingrese la cantidad de corredores:"
	leer cant_corredores
	Dimension marca_masculino[cant_corredores, 3], marca_femenino[cant_corredores, 3]
	
	Escribir "Cargando marcas MASCULINO: "
	cargarMarca(marca_masculino, cant_corredores)
	Escribir "Cargando marcas FEMENINO: "
	cargarMarca(marca_femenino, cant_corredores)
	
	// Promedio por a�o de cada categor�a:
	para anio = 0 Hasta 2 Hacer
		Escribir "Promedio FEMENINO en el a�o 202", anio+1, " ", promedioPorAnio(marca_femenino, cant_corredores, anio);
		Escribir "Promedio MASCULINO en el a�o 202", anio+1, " ", promedioPorAnio(marca_masculino, cant_corredores, anio);
		Escribir ""
		
	FinPara
	
	// promedio de los �ltimos a�os
	Escribir "El promedio de los �ltimos a�os para FEMENINO: ", promedioGeneral(marca_femenino, cant_corredores);
	Escribir "El promedio de los �ltimos a�os para MASCULINO: ", promedioGeneral(marca_masculino, cant_corredores);
	
	// La mejor marca para cualquier categor�a de los �ltimos 3 a�os.
	Escribir "La mejor marca para cualquier categor�a de los �ltimos 3 a�os: ", laMejorMarca(marca_femenino, marca_masculino, cant_corredores)
	
	// El mejor promedio de la categor�a femenina y el mejor promedio de la categor�a
	// masculina para el �ltimo a�o.
	
	Escribir "El mejor marca de la categor�a femenina para el �ltimo a�o: ", elMejorPromedio(marca_femenino, cant_corredores, 2)
	Escribir "El mejor marca de la categor�a masculino para el �ltimo a�o: ", elMejorPromedio(marca_masculino, cant_corredores, 2)

FinAlgoritmo

// carga las marcas en el arreglo
SubProceso cargarMarca(marcas, cant_corredores)
	definir i, j Como Entero
	
	para i = 0 Hasta cant_corredores-1 Hacer
		para j = 0 hasta 2 Hacer
			Escribir "Ingrese la marca del corredor: ", i+1, " en el a�o: 202", j+1;
			leer marcas[i, j];
		FinPara
	FinPara
FinSubProceso

// calcula promedio por a�o
Funcion promedio <- promedioPorAnio(marcas, corredores, anio)
	definir i Como Entero
	definir promedio Como Real
	
	para i = 0 Hasta corredores-1 Hacer
		promedio = promedio + marcas[i, anio]
	FinPara
	
	promedio = promedio / corredores;
FinFuncion

// promedio de los �ltimos a�os
Funcion promedioGen <- promedioGeneral(marcas, corredores)
	definir i, j Como Entero
	definir promedioGen Como Real
	
	para i = 0 Hasta corredores-1 Hacer
		para j = 0 hasta 2 Hacer
			promedioGen = promedioGen + marcas[i, j]
		FinPara
	FinPara
	
	promedioGen = promedioGen / (corredores * 3)
FinFuncion

// La mejor marca para cualquier categor�a de los �ltimos 3 a�os.
funcion mejorMarcaGeneral <- laMejorMarca(marcasFem, marcasMasc, corredores)
	definir i, j Como Entero
	definir mejorMarcaFem, mejorMarcaMasc, mejorMarcaGeneral Como Real
	
	para i = 0 Hasta corredores-1 Hacer
		para j = 0 hasta 2 Hacer
			
			si (i == 0 Y j == 0) Entonces
				mejorMarcaFem = marcasFem[i, j]
				mejorMarcaMasc = marcasMasc[i,j]
			sino 
				si (mejorMarcaFem > marcasFem[i,j]) Entonces
					mejorMarcaFem = marcasFem[i, j]
				FinSi
				si (mejorMarcaMasc > marcasMasc[i,j]) Entonces
					mejorMarcaMasc = marcasMasc[i,j]
				FinSi
			FinSi
			
		FinPara
	FinPara
	
	si (mejorMarcaFem < mejorMarcaMasc) Entonces
		mejorMarcaGeneral = mejorMarcaFem
	SiNo
		mejorMarcaGeneral = mejorMarcaMasc
	FinSi
	
FinFuncion

// El mejor promedio de la categor�a femenina y el mejor promedio de la categor�a
// masculina para el �ltimo a�o.
Funcion mejorPromedio <- elMejorPromedio(marcas, corredores, anio)
	definir i Como Entero
	definir mejorPromedio Como Real
	
	para i = 0 Hasta corredores-1 Hacer
		si i == 0 Entonces
			mejorPromedio = marcas[i, anio]
		SiNo
			si (mejorPromedio > marcas[i, anio]) Entonces
				mejorPromedio = marcas[i, anio]
			FinSi
		FinSi
	FinPara
FinFuncion
	