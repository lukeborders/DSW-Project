from flask import Flask, url_for, render_template
app = Flask(__name__)

@app.route("/")
def render_home():
  return render_template('index.html')
@app.route("/p1")
def render_page1():
  return render_template('page1.html')
@app.route("/p2")
def render_page2():
  return render_template('page2.html')
@app.route("/")
def render_newwindow():
  return render_template('newwindow.html')
if __name__ == "__main__":
  app.run(debug=False, port=54321)
