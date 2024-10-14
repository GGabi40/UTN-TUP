# HERENCIA

# Mecanismo de la POO p crear clases nueas a 
# partir de preexistentes.

# Las clases nuevas toman att y métodos de clases 
# anteriores.

# La clase q aporta métodos y att p heredar: Superclase o clase padre
# Las derivadas de ella: subclases o clases hijas.

# -- Subclase: clase superior o clase base. Son como plantillas 
# para construir objetos.

# Para utilizar el concepto de herencia se necesita 
# la clase base que posea los att y métodos comunes y luego 
# crear las demás clases heredando de ella.

# - Herencia SIMPLE: 
class Padre: # superclase
    def __init__(self):
        self.apellido = "Fritas"
        
    def llevar(self):
        print('Llevame al colégio.')


class Hijo(Padre): # subclase
    def estudiar(self):
        print('Estoy en el colégio.')

hijo1 = Hijo() # instanciar hijo1
hijo1.llevar()
hijo1.estudiar()

print(hijo1.apellido) # Lo heredó

# otro ejemplo:

class Persona:
    def __init__(self, ident, nombre, apellido, dni):
        self.ident = ident
        self.nombre = nombre
        self.apellido = apellido
        self.dni = dni
    
    def __str__(self):
        return f"{self.ident} - DNI {self.dni} {self.apellido}, {self.nombre}"

# El método __str__ de la subclase persona mestra 
# la cadena de texto q contiene una representación 
# de los att p1

p1 = Persona(3, "Carlos", "fritas", 322222)
print(p1)


class Alumno(Persona):
    def __init__(self, ident, nombre, apellido, dni, curso):
        super().__init__(self, ident, nombre, apellido, dni, curso)
        self.curso = curso


a1 = Alumno(1, "Gab", "Bap", 322222, "Programación")
print(a1)
