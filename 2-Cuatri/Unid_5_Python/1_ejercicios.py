""" 1. Escribe un programa que identifique el color
de un objeto y muestre un mensaje según el color. """

colores = ["azul", "morado", "rosa"]

color = input("Ingrese un color: ").lower()

if(color in colores):
    print(f'{color} es un color en la lista de colores.')
else:
    print(f'{color} no es un color de la lista.')


""" 2. Escribe un programa que muestre
los números del 0 al 4 usando un ciclo while. """

i = 0

while i <=4:
    print(i)
    i = i+1


""" 2.1. Escribe un programa que solicita al usuario
que ingrese números enteros positivos y muestre
la suma de esos números. La entrada de números
continuará hasta que el usuario ingrese un 
número negativo, momento en el que el programa 
mostrará la suma total. """

acumulador = 0
bandera = True

while bandera:
    numeros = int(input('Ingrese un numero entero positivo: '))
    if(numeros < 0):
        bandera = False
        print('Saliendo el bucle...')
    else:
        acumulador += numeros
        
print(f'La suma total fue de: {acumulador}')
    


""" 3.Escribe un programa que muestra la primer,
última u otra letra de una cadena de caracteres,
inclusive una rebanada. """

caracter = 'Hola'
longitud = len(caracter)
primeraLetra = caracter[0]
ultimaLetra = caracter[longitud-1]

print(f'La primera letra: {primeraLetra}; La última letra: {ultimaLetra}; otra letra: {caracter[2:3]}')


""" 4. Crear una lista de frutas y mostrar en consola
algunas frutas de la lista, también por rebanadas. 
    5. Escribe un programa que recorra una lista de 
frutas y muestre cada fruta. """

frutas = ["kiwi", "manzana", "pera", "uvas"]

for fruta in frutas:
    print(fruta)

""" 5.1 Agregar otras frutas a la lista. """

frutas.append("cereza")

for fruta in frutas:
    print(fruta)

""" 5.2 Escribe un programa verifique si una fruta 
específica está en una lista de frutas y muestra
un mensaje correspondiente. """

frutas = ["kiwi", "manzana", "pera", "uvas"]

nuevaFruta = input("Qué fruta buscabas? ").lower()

if (nuevaFruta in frutas):
    print(f'Sí tenemos {nuevaFruta}!')
else:
    print(f'No tenemos {nuevaFruta} en la lista...')
    


""" 6. Escribe un programa que recorra una lista
de números y muestre si cada número es par o impar. """

numeros = [2, 3, 4, 5, 6, 7, 8, 9]

for numero in numeros:
    if(numero % 2 == 0):
        print(f'{numero} es par.')
    else:
        print(f'{numero} es impar.')


""" 7. Escribe un programa que recorra una cadena de 
texto y cuente cuántas veces aparece la letra 'a' en la cadena. """

cadena = "Papas fritas"

print(f'Aparece: {cadena.count("a")} veces.')
                # Cuidado con las comillas


""" 8. Integrador:
Escribe un programa que permita a un usuario crear
una lista de nombres. El programa continuará pidiendo
nombres hasta que el usuario ingrese "fin". Luego, 
el programa mostrará la lista de nombres en orden alfabético,
indicará cuántos nombres empiezan con la letra 'A' o 'E', 
y mostrará si un nombre específico está en la lista. """

nombres = []

while True:
    nuevoNombre = input('Ingrese un nombre a la lista: ').capitalize()
    if(nuevoNombre == 'Fin' or nuevoNombre == 'fin'):
        print('Saliendo el bucle...')
        break
    else:
        nombres.append(nuevoNombre)
        print(f'{nuevoNombre} agregado.')


nombres.sort() # ordena por orden alfabetico
print(f'La lista en orden alfabético: \n{nombres}')

contadorA = 0
contadorE = 0
for nombre in nombres:
    if(nombre[0] == "A"):
        contadorA = 1 + contadorA
    elif(nombre[0] == "E"):
        contadorE = 1 + contadorE

print(f'Cantidad nombres que arrancan con A: {contadorA}')
print(f'Cantidad nombres que arrancan con E: {contadorE}')

buscador = input('Qué nombre desea buscar de la lista? ').capitalize()

if(buscador in nombres):
    print(f'{buscador} está en la lista! En la posición: {nombres.index(buscador)}')
else:
    print(f'{buscador} no está en la lista...')

