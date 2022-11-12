import pytesseract

from PIL import Image, ImageFilter

import os

langs = ['eng', 'hin']

os.chdir(os.path.dirname(__file__))

datadir = '../demodata'

for i,image in enumerate(os.listdir(datadir)):
    if i!=1: continue
    im = Image.open(datadir+'/'+image)
    s = pytesseract.image_to_string(im), "+".join(langs)
    print(s)