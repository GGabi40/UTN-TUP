# Ejercicio 1 

# Crear la clase Persona con los métodos “set_nombre”, 
# “set_edad”, “get_nombre”, “get_edad” y 
# “print_persona”. Luego crear dos objetos del 
# tipo Persona e imprimirlos por consola.

class Persona:
    def __init__(self):
        self.nombre = ""
        self.edad = 0
        
    def set_nombre(self, nombre):
        self.nombre = nombre
            
    def get_nombre(self):
        return self.nombre
            
    def set_edad(self, edad):
        self.edad = edad
        
    def get_edad(self):
        return self.edad
        
    def print_persona(self):
        print(f"Esta persona es: {self.get_nombre()}, tiene {self.get_edad()} años.")

# Crear objetos de tipo Persona
persona1 = Persona()
persona1.set_nombre("Juan")
persona1.set_edad(22)

persona1.print_persona()


# Ejercicio 2

# Agregarle a la clase anterior 
# un constructor que reciba nombre y edad.

class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
        
    def print_persona(self):
        print(f"Esta persona es: {self.nombre}, tiene {self.edad} años.")



persona3 = Persona("Juan", 22)
persona3.print_persona()


# Ejercicio 3

# Agregarle a la clase anterior un método 
# “es_mayor_de_edad” que devuelva True o False.

class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
        
    def print_persona(self):
        print(f"Esta persona es: {self.nombre}, tiene {self.edad} años.")
    
    def es_mayor(self):
        if(self.edad >= 18):
            print(f'{self.edad >= 18}. Es mayor de edad.')


persona3 = Persona("Juan", 22)
persona3.print_persona()
persona3.es_mayor()


# EJERCICIO 4
# Agregarle un método “es_mayor_que” el cual recibe un objeto persona y
# compara su edad con la del objeto actual.

class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
        
    def print_persona(self):
        print(f"Esta persona es: {self.nombre}, tiene {self.edad} años.")
    
    def es_mayor(self):
        return self.edad >= 18
        # if(self.edad >= 18):
            # print(f'{self.edad >= 18}. Es mayor de edad.')
    
    def es_mayor_que(self, otraPersona):
        if (otraPersona > self.edad):
            print(f'La mayor edad es: {otraPersona} años.')
        elif(self.edad > otraPersona):
            print(f'La mayor edad es: {self.edad} años.')
        else:
            print(f'Los dos tienen: {self.edad} años.')


persona4 = Persona("Juan",32)
persona5 = Persona("María",30)

persona4.es_mayor_que(persona5.edad)


# EJERCICIO 5
# Agregarle un método estático “get_mayor” que reciba dos objetos Persona y
# devuelva el de edad mayor.

class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
        
    def print_persona(self):
        print(f"Esta persona es: {self.nombre}, tiene {self.edad} años.")
    
    @staticmethod
    def get_mayor(persona1, persona2):
        if (persona1 > persona2):
            print(f'La mayor edad es: {persona1} años.')
        elif(persona2 > persona1):
            print(f'La mayor edad es: {persona2} años.')
        else:
            print(f'Los dos tienen: {persona2} años.')


persona4 = Persona("Juan",32)
persona5 = Persona("María",20)

Persona.get_mayor(persona4.edad, persona5.edad)


# EJERCICIO 6
# Realizar un programa que conste de una clase llamada Alumno que tenga
# como atributos el nombre y la nota del alumno. Definir los métodos para
# inicializar sus atributos, imprimirlos y mostrar un mensaje con el resultado de la
# nota y si ha aprobado o no.

class Alumno:
    def __init__(self, nombre, nota):
        self.nombre = nombre
        self.nota = nota
    
    def imprime(self):
        print(f'Nombre alumno: {self.nombre}, su nota: {self.nota}')
    
    def aprobado(self):
        if(self.nota >= 6):
            print(f'Alumno aprobado. Nota: {self.nota}')
        else:
            print(f'Alumno reprobado. Nota: {self.nota}')


alumno1 = Alumno("Juan", 10)
alumno2 = Alumno("María", 4)
alumno3 = Alumno("Carlos", 6)

alumno1.aprobado()
alumno1.imprime()

print('-='*10)
alumno2.aprobado()
alumno2.imprime()

print('-='*10)
alumno3.aprobado()
alumno3.imprime()


# EJERCICIO 7
# Desarrollar un programa que cargue los datos de un triángulo. Implementar una
# clase con los métodos para inicializar los atributos [OK] , imprimir el valor del lado
# con un tamaño mayor [OK] y el tipo de triángulo que es (equilátero, isósceles o
# escaleno) [OK].

class Triangulo:
    def __init__(self, lado1, lado2, lado3):
        self.lado1 = lado1
        self.lado2 = lado2
        self.lado3 = lado3
    
    def tipoTriangulo(self):
        if (self.lado1 == self.lado2 == self.lado3):
            print('Es equilatero!')
        elif(self.lado1 != self.lado2 != self.lado3 and self.lado1 != self.lado3):
            print('Es escaleno!')
        else:
            print('Es isósceles!')
            
    def mayorLado(self):
        mayorLado = max(self.lado1, self.lado2, self.lado3)
        print(f'El mayor lado es: {mayorLado}')


l1 = int(input('Ingrese el primer lado: '))
l2 = int(input('Ingrese el segundo lado: '))
l3 = int(input('Ingrese el tercer lado: '))

t = Triangulo(l1, l2, l3)
t.tipoTriangulo()
t.mayorLado()



# EJERCICIO 8
# Realizar un programa en el cual se declaren dos valores enteros por teclado
# utilizando el método __init__. Calcular después la suma, resta, multiplicación y
# división. Utilizar un método para cada una e imprimir los resultados obtenidos.
# Llamar a la clase Calculadora.




# EJERCICIO 9
# Realizar una clase que administre una agenda. Se debe almacenar para cada
# contacto el nombre, el teléfono y el email. Además deberá mostrar un menú
# con las siguientes opciones: Añadir contacto, Listar contactos, Buscar contacto,
# Editar contacto, Cerrar agenda.



# EJERCICIO 10
# En un banco tienen clientes que pueden hacer depósitos y extracciones de
# dinero. El banco requiere también al final del día calcular la cantidad de dinero
# que se ha depositado. Se deberán crear dos clases, la clase cliente y la clase
# banco. La clase cliente tendrá los atributos nombre y cantidad y los métodos
# __init__, depositar, extraer, mostrar_total. La clase banco tendrá como
# atributos 3 objetos de la clase cliente y los métodos __init__, operar y
# deposito_total