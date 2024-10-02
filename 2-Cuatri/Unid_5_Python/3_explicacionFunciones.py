# -- Funciones | Definición

# Ej 1.

# 1. Definir función:
def suma(a,b):
    s = a+b
    print('Suma = ', s)

# 2. Llamarla
suma(3, 4)

# ----------------------

# Ej 2.

def potencia(base, exponente):
    p = base ** exponente
    print(f'Potencia = {p}')

potencia(2,2)

# ----------------------

# Ej 3.

# Si en mi definición de la función hago:
def ejemplo(valor1, valor2=0):
    print(valor1,valor2)
    # marco un valor por defecto de valor2 como 0,
    # si no pongo un argumento para valor2, el valor2 por defecto es 0.

ejemplo(1)

# ----------------------

# Ej 4.

def potencia2(base, exponente):
    return base**exponente

print(potencia2(2,3))

# ----------------------

# Ej 5.

def resta(num1, num2):
    return num1 - num2

resultado = resta(5, 2)
print(f'El resultado es: {resultado}')
# conviene guardar resultado en variable cuando voy a utilizar 
# este valor en otras ocasiones del código.

# ----------------------

# Ej 6.

edad = int(input('Ingrese edad: '))

def validacionEdad(edad):
    edadValida = False
    
    while not edadValida:
        if(edad < 18):
            edadValida = False
            print('No puede ingresar.')
            edad = int(input('Ingrese edad: '))
        else:
            edadValida = True
            print('Puede ingresar.')

# La función debe estar declarada antes de ser llamada. Sino salta error
validacionEdad(edad)




#                                   #
# ------- PRÁCTICA EN CLASE ------- #
#                                   #

""" EJERCICIO 2.
Desarrollar una función que reciba tres números enteros positivos y verifique si
corresponden a una fecha válida (día, mes, año). Devolver True o False según
la fecha sea correcta o no. Realizar también un programa para verificar el
comportamiento de la función.
"""

dia = int(input('Ingrese un valor para día (DD): '))
mes = int(input('Ingrese un valor para mes (MM): '))
año = int(input('Ingrese un valor para año (AAAA): '))

def validarFecha(dia, mes, año):
    diaValido = True
    mesValido = True
    añoValido = True
    
    if(dia < 1 or dia > 31):
        print('Formato de día inválido.')
        diaValido = False
    if(mes < 1 or mes > 12):
        print('Formato de mes inválido.')
        mesValido = False
    if(año < 1000):
        print('Formato de año inválido.')
        añoValido = False
    
    if (diaValido and mesValido and añoValido):
        print('Formato aceptado.')
        print(f'{dia}-{mes}-{año}')

validarFecha(dia, mes, año)



""" EJERCICIO.
Función que recibe dos números y devuelve el mayor, o un mensaje si son iguales
"""

def es_mayor(num1, num2):
    if num1 > num2:
        return num1
    elif num2 > num1:
        return num2
    else:
        return "Los números son iguales"

def comparar_numeros():
    num1 = int(input("Ingrese el primer número: "))
    num2 = int(input("Ingrese el segundo número: "))
    
    resultado = es_mayor(num1, num2)
    
    print("Resultado:", resultado)

# Llamamos al programa principal
comparar_numeros()



""" EJERCICIO.
Confeccionar una función que le enviemos como parámetro 
el valor del lado de un cuadrado y nos retorne su superficie.
"""

lado = float(input('Ingrese el lado de un cuadrado: '))

def superficie(lado):
    resultado = lado * lado
    return resultado

print(f'La superficie del cuadrado con {lado} cm es: {superficie(lado)}')