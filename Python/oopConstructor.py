# this is code about CONSTRUCTR .....




class Car:
    def __init__(self,Name):# we use this method to create object to this data 
        self._Name=Name

    def GetOwner(self):
        print("Owner is ",self._Name)


def main():
    mycar=Car("Hussin Alrubaye")
    mycar.GetOwner()
    Jencar=Car("jen Alrubaye")
    Jencar.GetOwner()


if __name__ == '__main__':main()
