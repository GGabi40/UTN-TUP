from flask import Blueprint, render_template, redirect, url_for, request, jsonify
from typing import List, Tuple, Any, Dict
from . import db
from .models import User
from .schemas import UserCreateSchema

# creando la sesión
user_bp = Blueprint('user_bp', __name__)


# Carga Pagina principal:
@user_bp.route("/")
def index():
    users: List[Tuple[Any]] = User.query.all()
    
    return render_template('index.html', users=users)


# ----------------
# Crear un usuario:

@user_bp.route("/users/new")
def new_user_form() -> str:
    return render_template("user_form.html")
    


@user_bp.route("/users", methods=['POST'])
def create_user():
    data: Tuple[Any] = request.form # trae info del formulario
    
    try: # prueba si hay error con esta info:
        UserCreateSchema(first_name=data['first_name'],
                        last_name=data['last_name'],
                        email=data['email'],
                        image_url=data['image_url'])
    except ValueError as e: # si hay algun error, entra aquí:
        return jsonify({"error": e}), 400


    new_user = User(first_name=data['first_name'].title(),
                    last_name=data['last_name'].title(),
                    email=data['email'],
                    image_url=data['image_url'])



    db.session.add(new_user)
    db.session.commit()
    
    return render_template('user_item.html', user=new_user)


# ----------------
# EDITAR usuarios:

@user_bp.route('/users/<int:user_id>/edit')
def edit_user_form(user_id: int) -> str:
    user: User = User.query.get_or_404(user_id) # Busca el usuario, 
    # si no encuentra tira error 404
    
    return render_template('user_item.html', user=user)


# ----------------
# ACTUALIZAR usuarios:
@user_bp.route('/users/<int:user_id>', methods=['GET', 'POST'])
def update_user(user_id: int) -> str:
    user: User = User.query.get_or_404(user_id)
    
    if request.method == 'POST':
        data: Dict[str, str] = request.form
    
        try:
            user_data: UserCreateSchema = UserCreateSchema(first_name=data['first_name'],
                                                        last_name=data['last_name'],
                                                        email=data['email'],
                                                        image_url=data['image_url'])
        except ValueError as e: # si hay algun error, entra aquí:
            return jsonify({"error": e}), 400

        user.first_name = user_data.first_name
        user.last_name = user_data.last_name
        user.email = user_data.email
        user.image_url = user_data.image_url # modifico valores con los nuevos
            
        db.session.commit()
            
        return redirect(url_for('user_bp.index', user_id=user.id)) # Redirigir a la lista de usuarios

    return render_template('user_form.html', user=user) # Cargar el formulario para editar

# ----------------
# ELIMINAR Usuario:


#                de usuarios, agarra el id
@user_bp.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id: int) -> str:
    user: User = User.query.get_or_404(user_id)
    
    db.session.delete(user)
    db.session.commit()
    
    users= List[Tuple[Any]] = User.query.all()
    
    return render_template('index.html', users=users)


