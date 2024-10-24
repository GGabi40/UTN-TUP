#                           #
# -- CLASE CON GIULIANNO -- #
#                           #

from flask import Flask, render_template, request, redirect, url_for, Response
from flask_sqlalchemy import SQLAlchemy
from typing import List, Tuple, Any


# Creamos una instancia de la clase Flask. 
# __name__ se pasa como argumento para que Flask sepa dónde buscar los recursos, 
# como archivos estáticos y plantillas.
app: Flask = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///contactos.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False # control de versiones en BBDD

db = SQLAlchemy(app)


class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True) # PK
    name = db.Column(db.String(100), nullable=False) # No puede ser Nulo
    mail = db.Column(db.String(100), nullable=False) # No puede ser Nulo


with app.app_context():
    db.create_all() # Crea toda la BBDD


@app.route('/') # Lo primero que aparezca cuando ingrese a la pagina 
# (ruta de pagina inicial)
def index() -> str:
    contacts: List[Tuple[Any]] = Contact.query.all() 
    # contact: tipoDeDato = valor

    return render_template('/index.html', contacts=contacts)

""" CREATE """
# Al tocar add, agrega un nuevo usuario y vuelve al index
@app.route('/add', methods=['POST'])
def add_contact() -> Response:
    name: str = request.form['name']
    mail: str = request.form['mail']
    
    if '@' not in mail:
        return render_template('error.html')
    
    mail = mail.lower()
    name = name.capitalize()
    
    new_contact: Contact = Contact(name=name, mail=mail) # agg nuevo contacto
    db.session.add(new_contact) # agrega nuevo contacto all registo
    db.session.commit()
    
    return redirect(url_for('index')) # retorna al index


""" DELETE """
@app.route('/delete/<int:id>') # id que vamos a eliminar de la BBDD
def delete_contact(id:int) -> Response:
    contact: Contact = Contact.query.get(id)
    
    if contact:
        db.session.delete(contact)
        db.session.commit()
    
    return redirect(url_for('index'))



if __name__ == '__main__':
    app.run(debug=True)