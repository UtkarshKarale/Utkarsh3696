import sys
from rembg import remove
from PIL import Image
import os

def process_image(input_path, output_path):
    print(f"Processing {input_path}...")
    if not os.path.exists(input_path):
        print(f"Error: {input_path} not found.")
        return
    input_image = Image.open(input_path)
    output_image = remove(input_image)
    output_image.save(output_path)
    print(f"Saved to {output_path}")

process_image('public/spiderman.jpeg', 'public/spiderman-nobg.png')
process_image('public/tom-holland.jpeg', 'public/tom-holland-nobg.png')
