from flask import Flask
from api.extensions import db, migrate
from api.models import User  # Importa los modelos para que estén registrados

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///instance/db.sqlite3'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)  # Inicializa SQLAlchemy con la app
    migrate.init_app(app, db)  # Inicializa Flask-Migrate con la app y la base de datos

    return app
