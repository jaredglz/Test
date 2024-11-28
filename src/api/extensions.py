from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

# Inicialización de extensiones
db = SQLAlchemy()  # Instancia de SQLAlchemy para manejar la base de datos
migrate = Migrate()  # Instancia de Flask-Migrate para manejar migraciones
