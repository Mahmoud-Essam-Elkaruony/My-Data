# this code about (Regular expression) ..

# what it mean Regular expression if we need to knoew what
# is in file we should ues the >> Regular expression = (re)
# and if we need to print a certain type....


import re

def main():

    readFile=open("regfile.txt","r")
    for line in readFile:
        if re.search("(Sa|Ha)na",line): # this line only print words
         print(line)                   # that start with (Sa or Ha)
                                       # and the end (na)
    readFile.close()

if __name__ == '__main__':main()
