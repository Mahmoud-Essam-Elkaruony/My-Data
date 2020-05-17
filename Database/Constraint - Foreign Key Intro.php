<?php

/*
=====================
== MySQL Datatype  ==
=====================

 Constraint - Foreign Key Intro
=====================

Foreign key = We use the foreign key to contact the tables with us ..

Like this:


CREATE TABLE order (
    order_id int NOT NULL,
    price varchar(255),
    client_id int NOT NULL, // This is will joining with another table
    PRIMARY KEY(order_id),
    FOREIGN KEY(client_id) reference clients(id)
);


*/

