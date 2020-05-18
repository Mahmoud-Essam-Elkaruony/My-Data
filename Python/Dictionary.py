#this is lesson about Dictionary


def main():
    #Student={'Name':"mahmoud esam",'Age':30,'Slary':232.5}; (this is not way easy)
    Student=dict(Name="mahmoud esam",Age=30,Slary=232.5);   # this is easy way
    Student['Name']="mahmoud Elkruony"      # this is addition to Dictionary
    Student['Dept']="software engineer"     # this is addition to Dictionary
    del Student["Dept"]        # this is Delete from Dictionary
    print (Student,type(Student))
    print (Student['Name'])
    print (Student['Age'])
    Student.clear()             # this is line is  delete all Dictionary
    print (Student,type(Student))


if __name__ == '__main__':main()
