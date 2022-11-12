import os
from flask import Flask, render_template, request
import tempfile
from .scraper import get_med, get_med_details

#dummmy function to test the server
def do_some_work (x):
    with open(x, 'r') as f:
        r = f.read()
        print(r)
    return r

app = Flask(__name__, static_folder='static', static_url_path='')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/image', methods=['POST'])
def upload():
    dataUri = request.json['body.image']
    # convert dataUri to image
    image = dataUri.split(',')[1].decode('base64')
    # save image
    with tempfile.NamedTemporaryFile(delete=False) as f:
        f.write(image)
        filename = f.name

    # do some work
    result = do_some_work(filename)

    # delete image
    os.remove(filename)

    return result

@app.route('/api/medsearch', methods=['POST'])
def medsearch():
    data = request.json['body']
    print(data)
    elements, links, single = get_med(data['name'], data['filters'])
    print(f"{elements=}")
    print(f"{links=}")
    print(f"{single=}")
    return elements, links

@app.route('/api/meddetails', methods=['POST'])
def meddetails():
    data = request.json['body']
    print(data)
    return get_med_details(data['link'])

if __name__ == '__main__':
    app.run(debug=True, port=5000)
