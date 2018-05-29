from flask import Flask, request, jsonify, send_from_directory
from pymongo import MongoClient
import hashlib
import os.path


app = Flask(__name__, static_url_path='')


client = MongoClient('localhost', 27017)
db = client.pitufos

@app.route('/recommendation', methods=['GET'])
def get_questions():
    recommendation = db.recommendation
    output = []

    for item in recommendation.find():
        output.append({'question': item['question'], 'answers': item['answers'], 'type': item['type'], 'order': item['order']})


    return jsonify({'result': output})

@app.route('/recommendation', methods=['POST'])
def save_questions():
    recommendation = db.recommendation
    question = request.json['question']
    answers = request.json['answers']
    type = request.json['type']
    order = request.json['order']
    output = []

    question_id = recommendation.insert({'question': question, 'answers': answers, 'type': type , 'order': order})
    question = recommendation.find_one({'_id': question_id})

    output.append({'question': question['question'], 'answers': question['answers'], 'type': question['type'], 'order': question['order']})
    return jsonify({'result': output})


@app.route('/recommendation', methods=['DELETE'])
def delete_questions():
    recommendation = db.recommendation
    recommendation.remove()
    output = []
    for item in recommendation.find():
        output.append({'question': item['question'], 'answers': item['answers'], 'type': item['type'], 'order' : item['order']})

    return jsonify({'result': output})

@app.route('/users', methods=['GET'])
def get_users():
    users = db.users
    output = []
    for user in users.find():
        output.append({'email': user['email'], 'passwd': user['passwd'], 'name': user['name'],
                       'lastname': user['lastname'], 'img': user['img'], 'description': user['description'],
                       'sendEmail': user['sendEmail']})

    return jsonify({'result': output})


@app.route('/users', methods=['POST'])
def save_users():
    users = db.users
    output = []
    email = request.json['email']
    pre_pass = request.json['passwd']
    pre_pass2 = hashlib.sha224(pre_pass.encode()).hexdigest()
    name = request.json['name']
    lastname = request.json['lastname']
    passwd = name + pre_pass2 + lastname
    img = request.json['img']
    description = request.json['description']
    sendEmail = request.json['sendEmail']

    user_id = users.insert({'email': email, 'passwd': passwd, 'name': name,
                       'lastname': lastname, 'img': img, 'description': description,
                       'sendEmail': sendEmail})
    user = users.find_one({'_id': user_id})

    output.append({'email': user['email'], 'passwd': user['passwd'], 'name': user['name'],
                       'lastname': user['lastname'], 'img': user['img'], 'description': user['description'],
                       'sendEmail': user['sendEmail']})
    return jsonify({'result': output})


@app.route('/users', methods=['DELETE'])
def delete_users():
    users = db.users
    users.remove()
    output = []
    for user in users.find():
        output.append({'email': user['email'], 'passwd': user['passwd'], 'name': user['name'],
                       'lastname': user['lastname'], 'img': user['img'], 'description': user['description'],
                       'sendEmail': user['sendEmail']})

    return jsonify({'result': output})




@app.route('/projects', methods=['GET'])
def get_projects():
    projects = db.projects
    output = []
    for project in projects.find():
        output.append({'technologies': project['technologies'], 'workday': project['workday'], 'schedule': project['schedule'],
                       'location': project['location']})

    return jsonify({'result': output})

@app.route('/projects', methods=['POST'])
def save_projects():
    projects = db.projects
    output = []
    technologies = request.json['technologies']
    workday = request.json['workday']
    schedule = request.json['schedule']
    location = request.json['location']

    project_id = projects.insert({'technologies': technologies, 'workday': workday, 'schedule': schedule,
                            'location': location})

    project = projects.find_one({'_id': project_id})

    output.append({'technologies': project['technologies'], 'workday': project['workday'], 'schedule': project['schedule'],
                   'location': project['location']})
    return jsonify({'result': output})














if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, ssl_context='adhoc')