# EJERCICIO 3

# Escribe un programa que pida el 
# nombre del usuario y escriba un texto que
# diga “Hola nombreUsuario”

nombre = input('Ingrese nombre: ').capitalize()
print(f'Hola {nombre}')


# EJERCICIO 4

# Escribe un programa que pida un número, 
# pida otro número y escriba el
# resultado de sumar estos dos números

numero = int(input('Ingrese un numero: '))
numero2 = int(input('Ingrese otro numero: '))
resultado = numero + numero2

print(f'El resultado de la suma {numero} + {numero2} = {resultado}')



# EJERCICIO 5

# Escribe un programa que pida dos 
# números y escriba en la pantalla 
# cual es el mayor

numero = int(input('Ingrese un numero: '))
numero2 = int(input('Ingrese otro numero: '))

if (numero > numero2):
    print(f'{numero} es mayor')
else:
    print(f'{numero2} es mayor')



# EJERCICIO 6

# Escribe un programa que pida 3 números y 
# escriba en la pantalla el mayor de
# los tres.

numero = int(input('Ingrese un numero: '))
numero2 = int(input('Ingrese otro numero: '))
numero3 = int(input('Ingrese otro numero más: '))

if (numero > numero2 and numero > numero3):
    print(f'{numero} es el mayor de todos')
elif (numero2 > numero and numero2 > numero3):
    print(f'{numero2} es el mayor de todos')
elif (numero3 > numero and numero3 > numero2):
    print(f'{numero3} es el mayor de todos')
else:
    print('Todos son iguales.')
    
    
# EJERCICIO 7

# Escribe un programa que 
# pida un número y diga si es divisible por 2

numero = int(input('Ingrese un numero: '))

if (numero % 2 == 0):
    print(f'{numero} es divisible por 2')
else:
    print(f'{numero} NO es divisible por 2')


# EJERCICIO 8

# Escribe un programa que pida un número 
# y nos diga si es divisible por 2, 3, 5 o 7
# (sólo hay que comprobar si lo es por uno de los cuatro)

numero = int(input('Ingrese un numero: '))

if (numero % 2 == 0):
    print(f'{numero} es divisible por 2')
elif (numero % 3 == 0):
    print(f'{numero} es divisible por 3')
elif (numero % 5 == 0):
    print(f'{numero} es divisible por 5')
elif (numero % 7 == 0):
    print(f'{numero} es divisible por 7')
else:
    print(f'{numero} NO es divisible por 2, 3, 5 o 7')


# EJERCICIO 9

# Añadir al ejercicio anterior que nos 
# diga por cuál de los cuatro es divisible 
# (hay que decir todos por los que es divisible

numero = int(input('Ingrese un numero: '))
numeros = [2, 3, 5, 7]
esDivisible = False

for i in numeros:
    if(numero % i == 0):
        print(f'{numero} es divisible por {i}')
        esDivisible = True

if(not esDivisible):
    print(f'{numero} NO es divisible por 2, 3, 5 o 7')


# EJERCICIO 10

# Escribir un programa que escriba en 
# pantalla los divisores de un número dado

numero = int(input('Ingrese un numero: '))

for i in range(1, numero+1):
    if(numero % i == 0):
        print(f'{numero} es divisible por {i}')


# EJERCICIO 11

# Escribir un programa que nos diga 
# si un número dado es primo (no es divisible
# por ninguno otro número que no sea él mismo o la unidad)

numero = int(input('Ingrese un numero: '))
primo = True

for i in range(2, numero):
    if(numero % i == 0):
        primo = False
        
if(primo):
    print(f'{numero} ES PRIMO')
else:
    print(f'{numero} NO ES PRIMO')


# EJERCICIO 12

""" Pide una nota (número). Muestra la calificación según la nota:
 0-3: Muy deficiente
 3-5: Insuficiente
 5-6: Suficiente
 6-7: Bien
 7-9: Notable
 9-10: Sobresaliente """

nota = float(input('Ingrese un numero: '))

if (0 < nota < 3):
    print('estudiá')
elif(3 <= nota < 5):
    print('Insuficiente')
elif(5 <= nota < 6):
    print('Suficiente')
elif(6 <= nota < 7):
    print('Bien')
elif(7 <= nota < 9):
    print('Notable')
else:
    print('Sobresaliente')


# EJERCICIO 13

""" 
Realiza un programa que escriba una pirámide 
del 1 al 30 de la siguiente
forma:
1
22
333
4444
55555
666666
……….
"""

for i in range(1, 31):
    for j in range(i):
        print(f'{i}', end='')
    print('')


# EJERCICIO 14

"""
Haz un programa que escriba una pirámide 
inversa de los números del 1 al
número que indique el usuario de la siguiente forma 
(suponiendo que indica 6):

666666
55555
4444
333
22
1
"""

numero = int(input('Ingrese un numero: '))

for i in range(numero, 0, -1):
    for j in range(i):
        print(f'{i}', end='')
    print('')


# EJERCICIO 15

"""
Crear un programa que escriba los números del 1 al 500, 
y que indique cuales
son múltiplos de 4 y de 9 y que 
cada 5 líneas 
muestre una línea horizontal.
"""

# 30
# 31
# 32
# 33
# 34
# 35
# ------------------
# 36 - > Divisible


for i in range(1,101):
    if (i % 4 == 0 and i % 9 == 0):
        print(f'{i} es divisible por 4 y por 9')
    elif(i % 4 == 0):
        print(f'{i} es divisible por 4')
    elif(i % 9 == 0):
        print(f'{i} es divisible por 9')
    else:
        print(i)
    
    if(i % 5 == 0):
        print('-' * 20)

