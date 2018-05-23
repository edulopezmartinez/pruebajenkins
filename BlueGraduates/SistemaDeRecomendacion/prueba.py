import pymongo
from pymongo import MongoClient

def insert_user(java, nodejs, mongodb):
   client = MongoClient('localhost', 27018)
   db = client.pymongo_test
   users = db.users



   user = {
       'name': '',
       'lastname': '',
       'pass': '',
       'age': '',
       'tecnologias':{'java':java, 'nodejs':nodejs, 'mongodb':mongodb}
   }


   new_result = users.insert([user]) #insertar usuario

   #pintar los usuarios por pantalla para debugear
   user2 = users.find()
   for info in user2:
       print(info)

def delete_users():
   client = MongoClient('localhost', 27018)
   db = client.pymongo_test
   users = db.users
   users.remove()


def get_user_by_name_and_lastname (name, lastname):
   client = MongoClient('localhost', 27018)
   db = client.pymongo_test
   users = db.users
   user = users.find({'name': name, 'lastname': lastname})
   return user