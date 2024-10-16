""" 1. Escribe un programa que recorra una lista
de números y muestre si cada número es par o impar. """

""" 2. Escribe un programa que recorra una cadena de 
texto y cuente cuántas veces aparece la letra 'a' en la cadena. """

""" 3. Integrador:
Escribe un programa que permita a un usuario crear
una lista de nombres. El programa continuará pidiendo
nombres hasta que el usuario ingrese "fin". Luego, 
el programa mostrará la lista de nombres en orden alfabético,
indicará cuántos nombres empiezan con la letra 'A' o 'E', 
y mostrará si un nombre específico está en la lista. """


nombre = []

while True:
    nuevoNombre = input('Ingrese un nombre: ').capitalize()
    if(nuevoNombre == 'Fin'):
        break
    else:
        nombre.append(nuevoNombre)
        print('El nombre fue agregado.')

nombre.sort()
print(f'La lista ordenada en orden alfabético: {nombre}')

contadorA = 0
contadorE = 0
for elementos in nombre:
    if(elementos[0] == 'A'):
        contadorA = contadorA +1
    elif (elementos[0] == 'E'):
        contadorE = contadorE +1

print(f'Hay {contadorA} nombres que arrancan con la letra A.\nHay {contadorE} nombres que arrancan con la letra E.')


buscador = input('Qué nombre querés buscar? ').capitalize()

bandera = buscador in nombre

if(bandera):
    print(f'El nombre {buscador} está en la lista')
else:
    print(f'El nombre {buscador} NO está en la lista')


#--------------------------------


""" Ejercicio 1: Números pares entre 1 y 100
Escribe un programa que imprima todos los números 
pares entre 1 y 100 utilizando un bucle for. """

for i in range(0, 100, 2):
    print(i)


""" Ejercicio 2: Sumar todos los números impares
Escribe un programa que recorra los números del 
1 al 50 usando un bucle for y sume solo los números impares. 
Al final, imprime la suma total."""

numeros = list(range(1,50,3))
print(sum(numeros))

 
""" Ejercicio 3: Contador de números positivos
Escribe un programa que permita al usuario ingresar números. 
El programa debe detenerse cuando el usuario ingrese el 
número 0 y, al final, debe mostrar cuántos números 
positivos fueron ingresados."""

contador = 0

while True:
    numero = int(input('Ingrese un numero: \nPresione 0 para salir.\n'))
    if(numero < 0):
        print('Ingrese un numero entero positivo.')
    else:
        if(numero != 0):
            contador = contador+1
        else:
            break

print(f'Se ingresaron: {contador} numeros')


""" Ejercicio 4: Lista de números al cuadrado
Crea una lista con los números del 1 al 10 y 
utiliza un bucle for para generar una nueva lista 
con los cuadrados de esos números. Imprime la nueva lista."""

numeros = list(range(1,11))
nuevosNumeros = []

for el in numeros:
    nuevosNumeros.append(el ** 2)

print(f'La nueva lista: {nuevosNumeros}')


 
""" Ejercicio 5: Promedio de una lista
Escribe un programa que le pida al usuario 
ingresar 5 números y los almacene en una lista. 
Luego, utiliza un bucle for para calcular el promedio de esos números."""

listaUser = []

for _ in range(5):
    numeros = float(input('Ingrese un numero: '))
    listaUser.append(numeros)
    
print(f'La lista: {listaUser}')

promedio = sum(listaUser) / 5

print(f'El promedio es: {promedio}')



""" Ejercicio 6: Multiplicación acumulativa
Escribe un programa que permita al usuario ingresar 
números de manera continua hasta que ingrese un número 
negativo. El programa debe multiplicar todos los números 
ingresados y mostrar el resultado al final."""

acumulador = 1
while True:
    numeros = int(input('Ingrese un numero positivo: \nIngrese -1 para salir\n'))
    if(numeros < 0):
        break
    else:
        acumulador *= numeros

print(f'El acumulador de todos los numeros ingresados es de: {acumulador}')


""" Ejercicio 7: Cuenta regresiva
Escribe un programa que pida un número al usuario y 
realice una cuenta regresiva desde ese número hasta 0, 
imprimiendo cada número en pantalla."""

numero = int(input('Ingrese un numero para la cuenta regresiva: '))

for i in reversed(range(numero)):
    print(i)

 
""" Ejercicio 8: Lista de palabras
Escribe un programa que pida al usuario ingresar 5 
palabras y las almacene en una lista. Luego, imprime 
las palabras en orden inverso al que fueron ingresadas."""

palabras = []

print('Ingrese 5 palabras: ')
for i in range(5):
    nuevaPalabra = input(f'Palabra {i+1}: ').capitalize()
    palabras.append(nuevaPalabra)

# revertido = list(reversed(palabras))
print(f'La lista de palabras en el orden inverso: {list(reversed(palabras))}')


"""Ejercicio 9: Números primos
Escribe un programa que imprima todos los 
números primos entre 1 y 50 utilizando un bucle for. 
Un número primo es aquel que solo es divisible por 1 
y por sí mismo."""

numero = list(range(1,50))

# numero == 1
# i == 1 | numero % 1 == 0 ? True
# i == 2 | numero % 2 == 0 ? 
# i == 3 | numero % 3 == 0 ? 
# i == 4 | numero % 4 == 0 ? 
# i == 5 | numero % 5 == 0 ? 
# i HASTA numero | numero % i ? Si es True, no es primo.

for numero in range(2, 51):
    esPrimo = True
    
    for i in range(2, numero):
        if(numero % i == 0):
            esPrimo = False
            break
    
    if(esPrimo):
        print(f'{numero} es primo')
        

"""Ejercicio 10: Calificación de notas
Crea un programa que pida al usuario ingresar 
5 calificaciones (de 0 a 10) y las almacene en una lista. 
Luego, el programa debe imprimir cuántas calificaciones 
son mayores o iguales a 6 (aprobadas) y cuántas son menores 
(reprobadas). """

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
