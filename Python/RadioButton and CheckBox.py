# this code about  RadioButton and CheckBox


from tkinter import *
from tkinter import ttk
root=Tk()

cb=ttk.Checkbutton(root,text='Is married')
cb.pack()
state=StringVar()
state.set('yes')
cb.config(variable=state,onvalue='Yes he is ',offvalue='No he is not')

rb1=ttk.Radiobutton(root,text='male')
rb1.pack()
rb2=ttk.Radiobutton(root,text='female')
rb2.pack()

rbvalue=StringVar()
rb1.config(variable=rbvalue, value='male')
rb2.config(variable=rbvalue ,value='female')



root.mainloop()
