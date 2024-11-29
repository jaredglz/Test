from app import create_db  # en lugar de 'from src.app import create_app'
from flask import Flask, jsonify, Blueprint
from api.extensions import db, migrate  # Asegúrate de importar 'migrate' aquí
from api.models import User

# Crea un Blueprint para las rutas de la API
api_blueprint = Blueprint('api', __name__, url_prefix='/api')

@api_blueprint.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user.to_dict() for user in users]), 200


# En tu archivo app.py, asegúrate de registrar el Blueprint
def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///instance/db.sqlite3'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    migrate.init_app(app, db)

    # Registrar el Blueprint
    app.register_blueprint(api_blueprint)

    return app
