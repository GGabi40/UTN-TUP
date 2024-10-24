

# -- CLASE CON MIGUEL --



#python -m venv venv
#venv\Scripts\activate
#pip list
#pip install flask
#python -m flask --version
# Importamos la clase Flask desde el módulo flask
from flask import Flask

# Creamos una instancia de la clase Flask. 
# __name__ se pasa como argumento para que Flask sepa dónde buscar los recursos, 
# como archivos estáticos y plantillas.
app = Flask(__name__)

# Decorador que asocia la función 'hello_world' a la ruta raíz ('/').
# Cuando un usuario accede a esta ruta, se ejecutará la función 'hello_world'.
@app.route('/')
def hello_world():
    # La función devuelve un mensaje que se mostrará en el navegador.
    return '¡Hola, Mundo!'

# Este bloque se asegura de que la aplicación se ejecute solo si este archivo 
# se ejecuta directamente, no si se importa como un módulo en otro archivo.
if __name__ == '__main__':
    # Iniciamos el servidor de desarrollo de Flask.
    # Por defecto, el servidor se ejecuta en http://127.0.0.1:5000/.
    app.run(debug=True) # inicia en modo depuración