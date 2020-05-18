# this is code about (CallBack) and function it is (lambda)
# you need to run the code until understand what hepn ....

from tkinter import *
from tkinter import ttk
root=Tk()

button1=ttk.Button(root,text='Click Me 1')
button1.pack()
button2=ttk.Button(root,text='Click Me 2')
button2.pack()
button3=ttk.Button(root,text='Click Me 3')
button3.pack()


def buClick(x):
    print("Clicked:{}".format(x))


button1.config(command= lambda : buClick(1))
button2.config(command= lambda : buClick(2))
button3.config(command= lambda : buClick(3))



root.mainloop()
