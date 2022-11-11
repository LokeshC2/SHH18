import os
from flask import Flask, render_template, request, send_from_directory, url_for
import tempfile

#dummmy function to test the server
def do_some_work (x):
    with open(x, 'r') as f:
        r = f.read()
        print(r)
    return "File recieved"

app = Flask(__name__, static_url_path='/static', static_folder='static', template_folder='templates')

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
    app.run(port=5000, debug=True)
