import os
from flask import Flask, render_template, request
import tempfile

#dummmy function to test the server
def do_some_work (x):
    with open(x, 'r') as f:
        r = f.read()
        print(r)
    return r

app = Flask(__name__, static_folder='public', template_folder='public')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api', methods=['POST'])
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

if __name__ == '__main__':
    app.run(port=5000)
