## ENUNCIADO - EJERCICIO 4 ## 

## 4. Sistema de Gestión de Inventario de Tienda ## 

# Descripción del Proyecto
Este proyecto tiene como objetivo crear un sistema para gestionar el inventario de una tienda. Los estudiantes deben implementar un programa en Python que permita registrar productos y modificar su cantidad en stock.

## Funcionalidades del Sistema
El sistema debe ofrecer un menú con las siguientes opciones:
    ● Registrar Producto: Permite al usuario registrar un producto con nombre, categoría, precio y cantidad en stock. [ OK ]
    ● Modificar Cantidad en Stock: Permite modificar la cantidad disponible de un producto. [ OK ]
    ● Listar Productos: Muestra todos los producto registrados. [ OK ]
    ● Salir: Finaliza la ejecución del programa. [ OK ]


# Clase Producto  [OK]
La clase Producto debe tener los siguientes atributos:
    ● Nombre: Nombre del producto.
    ● Categoría: Categoría a la que pertenece el producto (alimentos, tecnología, etc.).
    ● Precio: Precio del producto.
    ● Cantidad en Stock: Cantidad disponible en el inventario.

## Reglas:
    ● Validar que no se puedan registrar productos duplicados.
    ● No permitir cantidades negativas en stock