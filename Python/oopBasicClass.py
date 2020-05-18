# this is code about  OOP and CLASS ....



class Car:
    def GetOwner(self):# this method get name >>>
        print("Owner is ",self._Name)
    def SetOwner(self, Name): # this method get value ....
        self._Name=Name


def main():
    mycar=Car()
    mycar.SetOwner("Hussin Alrubaye")
    mycar.GetOwner()
# there is a lot of different of those example although they the same ..
# you can make anything else in this example 
    Jencar=Car()
    Jencar.SetOwner("jen Alrubaye")
    Jencar.GetOwner()


if __name__ == '__main__':main()
