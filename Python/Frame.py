# this code about Frame .....


from tkinter import *
from tkinter import ttk
root=Tk()

f1=ttk.Frame(root)
f1.pack()
f1.config(width=200,height=200,relief=RIDGE)# this line is what kind of Frame

f2=ttk.Frame(root)
f2.pack()
f2.config(width=200,height=200,relief=RIDGE)

ttk.Button(f1,text='button1').grid(row=0,column=0)
ttk.Button(f1,text='button2').grid(row=0,column=3)

ttk.Button(f2,text='button3').pack()
ttk.Button(f2,text='button4').pack()
ttk.Button(f2,text='button5').pack()

f1.config(padding=(10,10))

f3=ttk.LabelFrame(root,height=100,width=100,text='login').pack()


root.mainloop()
