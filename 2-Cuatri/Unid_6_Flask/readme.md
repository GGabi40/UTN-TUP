<h1>Cómo Instalar FLASK</h1>

<h2>Arrancar con un entorno virtual</h2>
<p>Ejecutar en la terminal:</p>
<code>python -m venv venv</code>
<legend>(Este comando crea un Entorno virtual).</legend>

<br>

<p>Después, si estás utilizando <b>Powershell</b>, activar entorno virtual con:</p>
<code>.\venv\Scripts\activate</code>

<br>

<p>Si estás utilizando <b>Bash</b>, activar entorno virtual con:</p>
<code>source venv/bin/activate</code>
<br>
<hr>

<h2>Si salta cualquier error de permiso:</h2>
<code>Set-ExecutionPolicy RemoteSigned -Scope CurrentUser</code>

<br>
<hr>
<h2>Si corrió todo bien con lo anterior:</h2>
<h3>Instalar Flask:</h3>
<p>1. Instalar flask:</p>
<code>pip install flask</code>
<p>2. Ejecutar:</p>
<code>pip install Flask Flask-SQLAlchemy flask-cors mysql-connector-python</code>

<br>
<hr>

<h1>Para Ejecutar la Aplicación:</h1>
<h2>Hacer un archivo app.py con el código:</h2>
<code>
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, Flask!"

if __name__ == '__main__':
    app.run(debug=True)
</code>

<p>En el código: </p>
<ul>
    <li>La aplicación define una ruta (/) que, cuando se visita en el navegador, muestra el texto "Hello, Flask!".</li>
    <li><code>debug=True</code> activa el modo de depuración, lo que ayuda durante el desarrollo mostrando mensajes de error detallados.</li>
</ul>
<br>

<h2>Activar entorno virtual (si no se hizo anteriormente):</h2>
<p>para powershell (terminal), utilizar:</p>
<code>.\venv\Scripts\activate</code>
<p>si está usando bash, utilizar:</p>
<code>source venv/bin/activate</code>

<br>
<br>

<h2>Ejecutar aplicación desde terminal:</h2>
<code>python app.py</code>

<br>
<br>

<h2>Abrir en navegador:</h2>
<a href="http://127.0.0.1:5000/">http://127.0.0.1:5000/</a>

