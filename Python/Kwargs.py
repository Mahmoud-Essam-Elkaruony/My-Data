# this is code about  ( **KWARGS )
# you can use this method if you need to append thing in your code or
# updata your code ...


class Car:
    def __init__(self,**kwargs):
        self.Data=kwargs

    def GetOwner(self):
        print("Owner is ",self.Data["Name"])
        print("Car Model ",self.Data["Model"])
        print("Year",self.Data["year"])
    def Set_Model(self,Model):# here if you need to set any value of any variable
        self.Data["Model"]=Model
    def Get_Model(self):# here if you need to set any model of any variable
        print("Car Model ",self.Data["Model"])


def main():
    mycar=Car(Name="Hussin Alrubaye",Model="camer 2015",year=2015)
    mycar.GetOwner()
    Jencar=Car(Name="jen Alrubaye",Model="aony x",year=2015)
    Jencar.GetOwner()
    # jen model set >>>>
    Jencar.Set_Model("2018")
    Jencar.Get_Model()



if __name__ == '__main__':main()
