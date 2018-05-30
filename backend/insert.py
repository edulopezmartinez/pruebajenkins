from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client.pitufos

recommendation = db.recommendation
users = db.users
projects  = db.projects

recommendationsData = [
    {   
        'order': 1,
        'question': '¿Qué tecnologías conoces?',
        'answers': ['Java', 'Python', 'JavaScript', 'MongoDB'],
        'type': 'varias'
    },
    {
        'order': 2,
        'question': '¿Cuánto sabes de Java?',
        'answers': [],
        'type': 'puntuacion'
    },
    {
        'order': 3,
        'question': '¿Cuánto sabes de Python?',
        'answers': [],
        'type': 'puntuacion'
    },
    {
        'order': 4,
        'question': '¿Cuánto sabes de JavaScript?',
        'answers': [],
        'type': 'puntuacion'
    },
    {
        'order': 5,
        'question': '¿Cuánto sabes de MongoDB?',
        'answers': [],
        'type': 'puntuacion'
    },
    {
        'order': 6,
        'question': '¿Qué tipo de jornada quieres?',
        'answers':  ['Jornada completa','Jornada parcial'],
        'type': 'unica'
    },
    {
        'order': 7,
        'question': '¿Dónde prefieres trabajar?',
        'answers': ['Av. de Burgos', 'Vaguada', 'Las Tablas','Alonso Martínez'],
        'type': 'varias'
    },
    {
        'order': 8,
        'question': '¿Qué horario prefieres?',
        'answers': ['Por la mañana', 'Por la tarde', 'Indiferente'],
        'type': 'unica'
    },
]
usersData = [
    {
        'email': 'usuario@usuario.com', 
        'passwd': '12345', 
        'name': 'Carlos',
        'lastname': 'Alonso', 
        'img': 'img/contacto1.png', 
        'description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        'sendEmail': False,
        'result': []
    },
    {
        'email': 'usuario2@usuario.com', 
        'passwd': '12345', 
        'name': 'Laura',
        'lastname': 'Martin', 
        'img': 'img/contacto2.png', 
        'description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        'sendEmail': False,
        'result': []
    },
    {
        'email': 'usuario3@usuario.com', 
        'passwd': '12345', 
        'name': 'Beatriz',
        'lastname': 'Redondo', 
        'img': 'img/contacto3.png', 
        'description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        'sendEmail': False,
        'result': []
    },
    {
        'email': 'usuario4@usuario.com', 
        'passwd': '12345', 
        'name': 'Sergio',
        'lastname': 'Marino', 
        'img': 'img/contacto4.png', 
        'description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        'sendEmail': False,
        'result': []
    },
    {
        'email': 'usuario5@usuario.com', 
        'passwd': '12345', 
        'name': 'Eduardo',
        'lastname': 'López', 
        'img': 'img/contacto5.png', 
        'description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        'sendEmail': False,
        'result': []
    }
]

for item in recommendationsData:
    recommendation.insert(item)

for item in usersData:
    users.insert(item)

client.close()