class Producto:
    def __init__(self, nombre, categoria, precio, cant):
        self.nombre = nombre
        self.categoria = categoria
        self.precio = precio
        self.cant = cant
    
    def __str__(self):
        return f"Nombre: {self.nombre}, Categoría: {self.categoria}, Precio: {self.precio}, Cantidad en Stock: {self.cant}"


# Lista de productos
productos = []

""" FUNCIONES """
def registrarProducto():
    nombre = input('Ingrese el nombre del producto: ').upper()

    # Valida que nombre no sea un numeroo
    if nombre.isdigit():
        print('\033[31mEl nombre no debe ser un numero.\033[m')
        return
    
    for producto in productos:
        if producto.nombre == nombre:
            print('\033[31mEl producto ya está registrado.\033[m')
            return
    
    
    categoria = input('Ingrese la categoría del producto: ').upper()
    precio = float(input('Ingrese el precio del producto: '))
    
    # Valida precio
    if precio < 0:
        print('\033[31mEl precio no puede ser negativo.\033[m')
        return
    
    cantidad = int(input('Ingrese la cantidad en stock: '))
    
    # Valida cantidad
    if cantidad < 0:
        print('\033[31mLa cantidad no puede ser negativa.\033[m')
        return
    
    
    nuevoProducto = Producto(nombre, categoria, precio, cantidad)
    productos.append(nuevoProducto)
    print('\033[32mProducto registrado.\033[m')



def modificaCantidad():
    nombre = input('Ingrese el nombre del producto: ').upper()
    cantidad = int(input('Ingrese la nueva cantidad: '))
    
    if cantidad < 0:
        print('\033[31mLa cantidad no puede ser negativa.\033[m')
        return

    for producto in productos:
        if producto.nombre == nombre:
            producto.cant = cantidad
            print('\033[32mCantidad Atualizada.\033[m')
            return
    
    print('\033[31mProducto no encontrado.\033[m')



def listarProductos():
    if not productos:
        print('\033[31mNo hay productos registrados.\033[m')
        return
    
    for producto in productos:
        print(producto)


def mostrarMenu():
    while True:
        print('')
        print("""--- Menú de Gestión de Inventario ---
            [ 1 ] Registrar Producto
            [ 2 ] Modificar Cantidad en Stock
            [ 3 ] Listar Productos
            [ 4 ] Salir""")

        opcion = int(input('Elegir una opción del menú: '))
        
        if opcion == 1:
            print('\n-- Registrando un Nuevo Producto --\n')
            registrarProducto()
        elif opcion == 2:
            print('\n-- Modificiando un Producto --\n')
            modificaCantidad()
        elif opcion == 3:
            print('\n-- Lista de Productos --\n')
            listarProductos()
        elif opcion == 4:
            print('\n\033[33mGracias por utilizar nuestro Sistema.\033[m')
            break
        else:
            print('\033[31mOpción inválida.\033[m')
    


""" MENÚ """
print('\033[33m-=\033[m'*20)
print('')
print("Sistema Gestión de Inventario".center(40))
print('')
print('\033[33m-=\033[m'*20)   

mostrarMenu()