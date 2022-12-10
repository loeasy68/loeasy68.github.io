from flask import Flask, redirect, url_for
import requests

app = Flask(__name__)

@app.route("/")
def home():
    return "<h1>LoGoat</h1>"

@app.route("/<name>")
def user(name):
    return f"Hello {name}!"

@app.route("/admin")
def admin():
    return redirect(url_for("home"))

if __name__ = "__main__":
    app.run()