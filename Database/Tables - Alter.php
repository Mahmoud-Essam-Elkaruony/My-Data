<?php

/*
=====================
== MySQL Datatype  ==
=====================

Tables - Alter
======================
How to change the data type and change the place 

------------

How to add ?

ALTER TABLE students ADD password varchar(255);

-------------------------------------------------------+

Add with place 

ALTER TABLE students ADD username varchar(255) AFTER name;
ALTER TABLE students ADD test varchar(255) FIRST name;

-----------------------------------------------------------------+
How to drop tha table?

ALTER TABLE students DROP last;
-------------------------------------------+
How to change the place ?

ALTER TABLE students CHANGE username username varchar(255) AFTER email;

You can change the data type of the table with this code 

ALTER TABLE students CHANGE test test char(50);

And you can change the type of data with this way --

ALTER TABLE students MODIFY test varchar(255);





*/

