# Arreglos

array = [1,2,3]
print(array)

array.append('Hola') # Me agrega el elemento 'Hola' al array
print(array)

array.remove(3) # Elimina el elemento entre paréntesis de la lista.
print(array)

array.pop() # Elimina el último elemento de la lista.
print(array)


print(array.index(2)) # Muestra la posición del elemento entre paréntesis


# ----------------------
# Diccionarios | Objetos

diccionario = {'Juan': 56, 'Ana': 15}
print(diccionario)

diccionarioFuncionAnonima = {x: x**2 for x in (2, 4, 6)}
print(diccionarioFuncionAnonima)

diccionarioVacio = {}


# Clave:valor || Key:Value

juegosOlimpicos = {
    "handball": 20,
    "natacion": 60, # Clave: Valor
    "triatlon": 10
}

print(juegosOlimpicos.items()) # Me imprime toda la clave, valor
print(juegosOlimpicos.keys()) # Me imprime solo las claves
print(juegosOlimpicos.values()) # Me imprime solo los valores

for claves, valor in juegosOlimpicos.items():
    print(claves, ': ', valor)


# Arreglo de Diccionario

personas = [{'nombre': 'Jorge', 'edad': 42},
            {'nombre': 'Ana', 'edad': 22},
            {'nombre': 'Britany', 'edad': 32}]

print(personas[1]["edad"])
print(personas[2].get("nombre"))

print('-'*10)
print(personas[2].get("direccion")) # Devuelve NONE
# print(personas[2]["direccion"]) # Devuelve un ERROR

print('-'*10)

for i, persona in enumerate(personas,start=1):
    print(f'El valor de i: {i}')
    print(persona)



# MAP
