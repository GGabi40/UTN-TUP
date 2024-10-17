while True:
    num = int(input('Ingrese un numero entero positivo: '))
    if(num < 0):
        print('Ingrese un numero positivo.')
    else:
        i = num
        resultado = 1
        print(f'{num}! = ', end='')
        
        while i > 0:
            resultado *= i
            print(f'{i}', end='')
            print(f' x ' if i > 1 else ' = ', end='')
            
            i -= 1
        
        print(resultado)
            
        
        salir = input('\nDesea seguir ingresando numeros? (S/N)')[0].upper()
        if(salir == 'N'):
            print('Gracias por utilizar la calculadora factorial.')
            break