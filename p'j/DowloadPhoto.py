import pyrebase
import os
config= {
    "apiKey": "AIzaSyBk0qsBe_EJYmAONl1wRWOYeEwo2bI06QM",
    "authDomain": "smartfarm-kku-89392.firebaseapp.com",
    "projectId": "smartfarm-kku-89392",
    "databaseURL": "gs://smartfarm-kku-89392.appspot.com",
    "storageBucket": "smartfarm-kku-89392.appspot.com",
    "messagingSenderId": "25983308435",
    "appId": "1:25983308435:web:cbbc8cd6567a9ed6ee7366",
    "measurementId": "G-MZJZJ48TR4"
}
firebase = pyrebase.initialize_app(config)
storage = firebase.storage()

# path_cloud = 'Fri-4-Jun-2021-00:00:03.jpg'
# storage.child(path_cloud).download(filename=("a:3.jpg"),path=os.path.basename(path_cloud))
# print("a_"+path_cloud)

file = open("./data.txt","r+")
for i in file:
    path_cloud=i.split("\n")[0]
    path_convert = path_cloud.replace(":","_")
    storage.child(path_cloud).download(filename=("img/"+path_convert),path=os.path.basename(path_cloud))


    


