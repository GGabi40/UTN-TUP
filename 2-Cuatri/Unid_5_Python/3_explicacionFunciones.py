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
            print('Puede ingresar.')
            edadValida = True

# La función debe estar declarada antes de ser llamada. Sino salta error
validacionEdad(edad)
