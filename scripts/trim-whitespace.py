# requires svgcleaner: brew install svgcleaner
# check location of main folder at the end; script is currently just where it is on my laptop
# run from terminal in the repository folder: python3 scripts/trim-whitespace.py

import os
import glob
from subprocess import call

def remove_whitespace_from_svg(input_file, output_file):
    # Execute the svgcleaner command on the input and output files
    call(['svgcleaner', input_file, output_file])

    if not os.path.exists(output_file):
        return

    # Remove the original input file
    os.remove(input_file)

    # Rename the output file to the original input file name
    os.rename(output_file, input_file)

def process_folder(folder_path):
    # Get a list of all files and directories in the folder
    items = os.listdir(folder_path)

    for item in items:
        item_path = os.path.join(folder_path, item)

        # Check if the item is a file
        if os.path.isfile(item_path):
            # Check if the file is an SVG
            if item.lower().endswith('.svg'):
                # Define the input and output file paths
                input_file = item_path
                output_file = item_path.rstrip('.svg') + '_cleaned.svg'

                # Remove whitespace from the SVG file
                print(input_file)
                remove_whitespace_from_svg(input_file, output_file)
        # Check if the item is a directory
        elif os.path.isdir(item_path):
            # Recursively process the subdirectory
            process_folder(item_path)

# Set the path to the main folder
main_folder = '/Users/benjamin/finsure/images'

# Start processing the main folder and its subfolders
process_folder(main_folder)
