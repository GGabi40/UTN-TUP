# Ejercicio 23: Comprobar si un carácter dado es una vocal.

caracter = input('Ingree un caracter: ').lower()
vocales = ['a', 'e', 'i', 'o', 'u']
bandera = False
for i in vocales:
    if(caracter in vocales):
        bandera = True
        
if(bandera):
    print('Es vocal.')
else:
    print('No es vocal.')


# Ejercicio 27: Generar un conjunto de números 
# aleatorios y determinar cuáles son impares.

from random import randint

numeros_aleatorios = [randint(1, 100) for _ in range(50)]

for i in numeros_aleatorios:
    if(i % 2 != 0):
        print(f'{i} es impar.')


# Ejercicio 110: Obtener los números divibles por 
# 7 usando una función anónima.

from random import randint
numeros_aleatorios = [randint(1, 100) for _ in range(50)]

divisiblesPorSiete = list(map(
    lambda divisible: 
        divisible if divisible % 7 == 0 
        else 'No divide', numeros_aleatorios
))

print(divisiblesPorSiete)


# Ejercicio 112: Eliminar un elemento específico de una lista.

lista = ['papa', 'cebolla', 'zanahoria']
print(lista)

lista.remove('zanahoria')
print(lista)


# Ejercicio 113: Validar si un número ingresado 
# por el usuario es válido.

numero = input('Ingrese un numero: ')

if(numero.isdigit()):
    print('Es un numero.')
else:
    print('No es un numero.')


# Ejercicio 115: Calcular el producto de los elementos de 
# una lista sin usar un ciclo for.

lista = [1,2,3,4,5,6,7]
acumulador = 1

def total(elemento):
    global acumulador
    acumulador *= elemento
    return acumulador

resultado = list(map(total, lista))

print(f'Resultado sin -1 {resultado}')
print(f'Resultado con -1 {resultado[-1]}')

# -- Otro modo: con reduce


# Ejercicio 148: Encontrar el mínimo y el máximo de 
# una lista sin usar funciones existentes.

lista = range(0,10)

mayor = lista[0]
menor = lista[0]

for i in lista:
    if i > mayor:
        mayor = lista[i]
    if i < menor:
        menor = lista[i]

print(f'El mayor numero de la lista es: {mayor}')
print(f'El menor numero de la lista es: {menor}')


# Ejercicio 150: Comprobar si existe al menos un 
# producto impar entre los elementos de una lista.

lista = range(0)
impar = False

for i in lista:
    if i % 2 != 0:
        impar = True
        
if impar:
    print('\033[34mHay al menos un producto impar entre los elementos.\033[m')
else:
    print('\033[31mNo hay al menos un producto impar entre los elementos.\033[m')


# Ejercicio 162: Determinar si la suma de los elementos 
# de una lista es igual a un número dado.


# Ejercicio 223: Remover los caracteres ubicados 
# en índices impares dentro de un texto.


# Ejercicio 251: Obtener los caracteres que 
# se repiten en una cadena.
