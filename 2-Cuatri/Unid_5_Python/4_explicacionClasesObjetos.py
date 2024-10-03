# OBJETOS

# poseen atributos:
# Persona -> nombre, edad, apellido...

# poseen métodos:
# funciones que puede cumplir
# Persona -> Hablar, Mirar ....



# ---------
# CLASES

# definir una clase Persona
class Persona():
    # agg atributos
    piernas = 2
    brazos = 2

# instanciar Objeto de clase persona: Juan
persona1 = Persona()

# Imprimir el att del objeto
print(persona1.piernas)
print(persona1.brazos)


# self -> se refiere al atributo, ya que self 
# hace referencia a la instancia del objeto


# CONSTRUCTOR
# Es un método que permite a la clase asignar valores a los att.
# Su primer parámetro es self, y los demás los requeridos 
# para la inicalización

class PersonaConst():
    def constructor(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
    
    def habla(self):
        print(f'Hola soy {self.nombre}')

persona2 = PersonaConst()
# Luego de instanciar, establecemos los valores de 
# los att mediante el constructor
persona2.constructor('Juan', 32)
persona2.habla()

# -------------------- #
# OTRO MODO: CON _init_

class PersonaInit():
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
    
    def identifica(self):
        print(f'Hola, soy {self.nombre}, tengo {self.edad} años.')

persona3 = PersonaInit("Aa", 21)
persona3.identifica()

#                 #
# -- EJERCICIO -- #
#                 #


class Alumno():
    def __init__ (self, nombre, apellido, edad, curso):
        self.nombre = nombre
        self.apellido = apellido
        self.edad = edad
        self.curso = curso
    def habla(self):
        print(f'Hola, soy {self.nombre}! Tengo {self.edad} años y estoy en el curso de {self.curso}.')

alumno1 = Alumno('Bob', 'Esponja', 36, 'Hamburguesas')
alumno1.habla()
