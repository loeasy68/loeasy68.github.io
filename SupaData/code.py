import db
from js import document
def start(tableName):
    document.getElementById("data").innerHTML = db.save(tableName, ["Hi", "Test"])
    document.getElementById("butto").innerHTML = db.get(1)
