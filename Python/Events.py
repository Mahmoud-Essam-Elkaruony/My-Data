# this is code about (Events) and (function) it is (bind)
# you need to run the code until understand what is happen ....



from tkinter import *
from tkinter import ttk
root=Tk()

def Key_press(event):
    print("type{}".format(event.type))
    print("Ctrol+c")

root.bind('<Control-c>',Key_press)

def button_press(event):
    print("Button is pressed")

bu=ttk.Button(root,text="Click Me")
bu.pack()
bu.bind('<ButtonPress>',button_press)


root.mainloop()
