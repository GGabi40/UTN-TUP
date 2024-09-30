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



# Ejercicio 9: Números primos

# Escribe un programa que imprima todos los 
# números primos entre 1 y 50 utilizando un bucle for. 
# Un número primo es aquel que solo es divisible 
# por 1 y por sí mismo.



# Ejercicio 10: Calificación de notas
# Crea un programa que pida al usuario ingresar 
# 5 calificaciones (de 0 a 10) y las almacene en una lista. 
# Luego, el programa debe imprimir cuántas calificaciones son 
# mayores o iguales a 6 (aprobadas) y cuántas son menores (reprobadas).

