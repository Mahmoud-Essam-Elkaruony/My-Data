import sqlite3

class dataConnect:

    def __init__(self):
        self._data = sqlite3.connect('listClients.db')
        self.data.row_factory = sqlite3.Row
        self._data.execute("create table if not exists Window(ID integer primary key autoincrement, Name text, Phone integer, Title text)")
        self.data.commit()






