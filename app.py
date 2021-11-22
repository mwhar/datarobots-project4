
from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html", salary = "Use predictor now.")


@app.route("/salary")
def salary():
    #Do I add in the code for the model prediction?
    return redirect("/", code=302)


if __name__ == "__main__":
    app.run(debug=True)