# from finsure directory
# python3 scripts/images.py
import os
from PIL import Image
from svglib.svglib import svg2rlg
from io import BytesIO
from reportlab.graphics import renderPDF
from reportlab.graphics import renderPM

# specify the directory path
dir_path = "./images/"

# loop through all files in the directory
for filename in os.listdir(dir_path):
    # check if the file is an image or an SVG file
    if filename.endswith('.jpg') or filename.endswith('.jpeg') or filename.endswith('.png'):
        # open the image file
        with Image.open(os.path.join(dir_path, filename)) as img:
            # get the height and width of the image in pixels
            width, height = img.size
            # print the filename, height, and width to the terminal
            print(f'{filename}: {height}x{width}')
    elif filename.endswith('.svg'):
        # open the SVG file
        with open(os.path.join(dir_path, filename), 'rb') as svg_file:
            # convert the SVG file to a PIL image
            svg_doc = svg2rlg(BytesIO(svg_file.read()))
            buffer = BytesIO()
            renderPDF.drawToFile(svg_doc, buffer)
            buffer.seek(0)
            pil_image = Image.open(buffer)
            # get the height and width of the SVG image in pixels
            width, height = pil_image.size
            # print the filename, height, and width to the terminal
            print(f'{filename}: {height}x{width}')
