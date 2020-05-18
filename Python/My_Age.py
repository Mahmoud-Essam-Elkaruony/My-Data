#this is code about my age >>>



import datetime

def main():
    DOB=input("Enter your DOB:")
    YearNow=datetime.datetime.now().year
    MyAge=YearNow-int(DOB)
    print("Your age is {}".format(MyAge))


if __name__ == '__main__':main()
