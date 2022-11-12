import pytesseract

from PIL import Image, ImageFilter

import os

langs = ['eng', 'hin']

os.chdir(os.path.dirname(__file__))

datadir = '../demodata'

def process_image(image):
    im = Image.open(datadir+'/'+image)
    s = pytesseract.image_to_string(im), "+".join(langs)
    return s

if __name__ == '__main__':
    for image in os.listdir(datadir):
        print(process_image(image))