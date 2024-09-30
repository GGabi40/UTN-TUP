# Ejercicio 2: Sumar todos los números impares

# Escribe un programa que 
# recorra los números del 1 al 50 usando un 
# bucle for y sume solo los números impares. 
# Al final, imprime la suma total. 

acc = 0

for i in range(1, 51):
    if(i % 2 != 0):
        acc += i

print(f'La suma total es de: {acc}')


# Ejercicio 3: Contador de números positivos
# Escribe un programa 
# que permita al usuario ingresar números. 
# El programa debe detenerse cuando el usuario ingrese el número 0 y, 
# al final, debe mostrar cuántos números positivos fueron ingresados.

contador = 0

numero = int(input('Ingrese un numero: \nPara salir, presione 0\n'))

while numero != 0:
    if(numero > 0):
        contador += 1
    numero = int(input('Ingrese un numero: \nPara salir, presione 0\n'))

print(f'Se ingresaron: {contador} numeros positivos.')


# Ejercicio 4: Lista de números al cuadrado
# Crea una lista con los números del 1 al 10 y 
# utiliza un bucle for para generar una nueva 
# lista con los cuadrados de esos números. 
# Imprime la nueva lista.


numeros = list(range(1,11))
nuevaLista = []

for i in numeros:
    nuevaLista.append(i ** 2)

print(f'La nueva lista: {nuevaLista}')
#  ** -> Potenciación


# Ejercicio 5: Promedio de una lista

# Escribe un programa que le pida al 
# usuario ingresar 5 números y los almacene en una lista.
# Luego, utiliza un bucle for 
# para calcular el promedio de esos números.

lista = []

for i in range(5):
    numero = float(input(f'Ingrese el numero {i+1}: '))
    lista.append(numero)

promedio = sum(lista) / 5

print(f'El promedio es: {promedio}')



# Ejercicio 6: Multiplicación acumulativa

# Escribe un programa que permita al usuario 
# ingresar números de manera continua hasta que ingrese 
# un número negativo. El programa debe multiplicar todos los 
# números ingresados y mostrar el resultado al final.

acumulador = 1

numero = int(input('Ingrese un numero: \nPara salir, ingrese un numero negativo\n'))

while numero >= 0:
    acumulador *= numero
    
    numero = int(input('Ingrese un numero: \nPara salir, ingrese un numero negativo\n'))

print(f'El total es de: {acumulador}.')


# Ejercicio 7: Cuenta regresiva

# Escribe un programa que pida un 
# número al usuario y realice una cuenta 
# regresiva desde ese número hasta 0, 
# imprimiendo cada número en pantalla.

from time import sleep

numero = int(input('Ingrese un numero: '))

for i in range(numero, 0, -1):
    print(i)
    sleep(1)



# Ejercicio 8: Lista de palabras

# Escribe un programa que pida al 
# usuario ingresar 5 palabras y las 
# almacene en una lista. Luego, imprime las palabras en
# orden inverso al que fueron ingresadas.

lista = []

for i in range(5):
    palabra = input(f'Ingrese la palabra numero {i+1}: ')
    lista.append(palabra)

lista.reverse()
print(f'La lista invertida: {lista}')


# Ejercicio 10: Calificación de notas
# Crea un programa que pida al usuario ingresar 
# 5 calificaciones (de 0 a 10) y las almacene en una lista. 
# Luego, el programa debe imprimir cuántas calificaciones son 
# mayores o iguales a 6 (aprobadas) y cuántas son menores (reprobadas).


print('<>' *20)
print('\n\033[4;33mCALIFICACIÓN DE NOTAS\033[m\n')
print('<>' *20)

notas = []

for i in range(1,6):
    while True:
        nota = int(input(f'Ingrese la nota \033[32m{i}\033[m: '))
        
        if(nota < 0 or nota > 10):
            print('La nota debe ser mayor a 10 o menor que 0.')
        else:
            notas.append(nota)
            break

print(f'Lista de notas: {notas}')

contadorBajo = 0
contadorAlto = 0
for elemento in notas:
    if(elemento >= 6):
        contadorAlto += 1
    else:
        contadorBajo += 1
        
print(f'\033[1;32mNOTAS APROBADAS: \033[m{contadorAlto} notas.')
print(f'\033[1;33mNOTAS REPROBADAS: \033[m{contadorBajo} notas.')


# EL CÓDIGO \033[m 
# AGREGA COLOR AL PRINT DE LA TERMINAL.
# \033[1;33m -> significa 1: bold // 33: texto amarillo

