# this is lesson about Tuples and list
# I find  a new method (>>>insert<<<)

def main():
    ages= (30,40,15,32)
    print (ages,type(ages))
    print (ages[0]) #first item
    print (ages[0:2])
    Ages=[30,40,15,32]
    Ages.append(100)
    Ages.insert(1,33)  # this is method you can ues it to choice any place
    print (Ages,type(Ages))

    Data="software engineer"
    print (Data[0:5])


if __name__ == '__main__':main()
