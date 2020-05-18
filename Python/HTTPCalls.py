# this is code about (HTTPC) if we need to read data in wedsite or json
# we need to import (urllib.request) for do that



import urllib.request,json
def main():
    data=urllib.request.urlopen("https://www.google.com/").read()# this line for
    print(data,type(data))                                       # read any website


# this code about json but it dose not work i do not know about json a lot
# but i will learn about it and back to it again <<<<<<<<<<<<<<<<<<
    
    #data=urllib.request.urlopen("http://selling.alruabye.net/UsersWS.asmx/GetToolType?lng=ar").read()
    #jonr=json.loads(data.decode("utf-8"))
    #print(jsonr,type(jsonr))
    #for row in jsonr['ToolData']:
        #print(row)





if __name__ == '__main__':main()
