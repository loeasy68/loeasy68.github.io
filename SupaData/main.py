import db
from js import document
def start():
    document.getElementById("data").innerHTML = db.save("People", ["Hi", "Test"])
    document.getElementById("butto").innerHTML = db.get(1)
