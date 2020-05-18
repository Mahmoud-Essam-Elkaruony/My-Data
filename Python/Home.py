from tkinter import *
from tkinter import ttk
from tkinter import messagebox

Home = Tk()
Home.title("The Plastic House")

# Style 

style = ttk.Style()
style.theme_use('classic')

#Full Name

ttk.Label(Home, text='Client Name:').grid(row=0, column=0, padx=10, pady=10)
entryClientName = ttk.Entry(Home, width=35, font=("Arial", 16))
entryClientName.grid(row=0, column=1, columnspan=2, padx=10)

#Title

ttk.Label(Home, text='Title:').grid(row=1, column=0, padx=10, pady=10)
entryTitle = ttk.Entry(Home, width=35, font=("Arial", 16))
entryTitle.grid(row=1, column=1, columnspan=2, padx=10, pady=10)

#Phone

ttk.Label(Home, text="Phone 1:").grid(row=2, column=0, padx=10, pady=10)
entryPhone = ttk.Entry(Home, width=20, font=("Arial", 16))
entryPhone.grid(row=0, column=2, padx=10, pady=10)

#Buttons

add = ttk.Button(Home, text="Save")
add.grid(row=3, column=4)

clients = ttk.Button(Home, text='Clients')
clients.grid(row=4, column=0, padx=10)

billing = ttk.Button(Home, text='Billings')
billing.grid(row=5, column=0)

items = ttk.Button(Home, text='Items')
items.grid(row=6, column=0, pady=5)

store = ttk.Button(Home, text='Store')
store.grid(row=7, column=0, pady=5)




Home.mainloop()
