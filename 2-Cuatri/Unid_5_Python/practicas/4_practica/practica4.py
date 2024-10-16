# EJERCICIO 1

class Vehiculo:
    def __init__(self, color, ruedas):
        self.color = color
        self.ruedas = ruedas
    
    def __str__(self):
        return f'Hola soy un Vehiculo, tengo color {self.color} y {self.ruedas} ruedas.'

class Coche(Vehiculo):
    def __init__(self, vel, cc):
        self.vel = vel
        self.cc = cc
    
    
class Camioneta(Vehiculo):
    def __init__(self, carga):
        self.carga = carga