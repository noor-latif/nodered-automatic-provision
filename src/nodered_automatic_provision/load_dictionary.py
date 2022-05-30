"""do regex pattern search on dictionary, return matches into dict"""
import re

words_list = []

# Open file in read mode
with open ("../../data/dictionary.txt", "r") as myfile:
    # Read the file line by line
    for line in myfile:
        # Search for pattern
        if re.search(r'^[a-zA-Z]{4,}$', line):
            # Add the line to the dictionary list
            words_list.append(line)
