# EJERCICIO 1

class Vehiculo:
    def __init__(self, color, ruedas):
        self.color = color
        self.ruedas = ruedas

class Coche(Vehiculo):
    def __init__(self, color, ruedas, vel, cc):
        super().__init__(color, ruedas)
        self.vel = vel
        self.cc = cc
    
    
class Camioneta(Vehiculo):
    def __init__(self, color, ruedas, carga):
        super().__init__(color, ruedas)
        self.carga = carga

class Bicicleta(Vehiculo):
    def __init__(self, color, ruedas, tipo):
        super().__init__(color, ruedas)
        self.tipo = tipo

class Motocicleta(Vehiculo):
    def __init__(self, color, ruedas, vel, cc):
        super().__init__(color, ruedas)
        self.vel = vel
        self.cc = cc



# EJERCICIO 2 y 3

vehiculos = [
    Coche("Rojo", 4, 150, 1200),
    Motocicleta("Negro", 2, 225, 650),
    Coche("Blanco", 4, 250, 3000),
    Bicicleta("Azul", 2, "Montaña")
]

def catalogar(vehiculos, ruedas = None):
    if ruedas is None:
        print(f'Catalogando vehículos sin ninguna rueda.')
    else:
        print(f'Catalogando vehículos con {ruedas} cant de ruedas.')
    
    
    for vehiculo in vehiculos:
        if ruedas is None or vehiculo.ruedas == ruedas:
            print(f"Tipo: {type(vehiculo).__name__}, Ruedas: {vehiculo.ruedas}")

catalogar(vehiculos)
catalogar(vehiculos, 2)


# EJERCICIO 3

