from flask import Flask, redirect, url_for
import requests

app = Flask(__name__)

@app.route("/")
def home():
    return f"""
    <h1>LoGoat</h1>
    <p>A highly inscure web application</p>
    <a href="{url_for("xss")}">Cross Site scripting</a>
    """

@app.

@app.route("/<name>")
def user(name):
    return f"Hello {name}!"

@app.route("/admin")
def admin():
    return redirect(url_for("home"))

if __name__ = "__main__":
    app.run()