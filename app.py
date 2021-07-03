from flask import Flask, render_template
from jinja2 import Markup
import socket

# 创建一个flask对象，赋予变量app
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def entry_page() -> 'html':
    return render_template('index.html')


if __name__ == '__main__':
    # host_name = socket.gethostname()
    # host_ip = socket.gethostbyname(host_name)
    # print("your name is"+str(host_name),"your ip is"+host_ip)
    app.run(debug=True)