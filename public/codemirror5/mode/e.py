import os

# get the current directory
dir_path = os.getcwd()

# get the list of directories in the directory
dirs = [d for d in os.listdir(dir_path) if os.path.isdir(
    os.path.join(dir_path, d))]

names = [];

# loop through each directory
for directory in dirs:
    # print the directory name
    names.append(directory)
    
import json;

print(json.dumps(names))