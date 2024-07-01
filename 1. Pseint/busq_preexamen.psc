Algoritmo BusquedaBinaria
    definir matriz, i, medio, inicio, final, dim, busco Como Entero
    definir noEncontrado Como Logico
    
    dim <- 4
    dimension matriz[dim]
    matriz[0] <- 1
    matriz[1] <- 2
    matriz[2] <- 3
    matriz[3] <- 4
    
    noEncontrado <- Verdadero
    inicio <- 0
    final <- dim - 1
    
    Escribir "Qué busco?"
    leer busco
    
    Repetir
        medio <- trunc((inicio + final) / 2)
        
        si matriz[medio] == busco Entonces
            noEncontrado <- Falso
            Escribir "Elemento encontrado en posición ", medio
        Sino
            si busco > matriz[medio] Entonces
                inicio <- medio + 1
            Sino
                final <- medio - 1
            FinSi
        FinSi
    Mientras Que noEncontrado Y inicio <= final 
    
    si noEncontrado Entonces
        Escribir "No encontrado."
    FinSi
FinAlgoritmo
