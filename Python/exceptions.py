# this is code about exceptions....
# exceptions means how you can find (ERROR).....



def main():
    try: ## here it means try read this code...
        readFile=open("test.txt","r")
        for line in readFile:
            print(line)
        readFile.close()
    except IOError: ## here if you can not read this code show me what kind of error..
        print("file is not found")


if __name__ == '__main__':main()
