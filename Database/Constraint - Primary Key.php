<?php

/*
=====================
== MySQL Datatype  ==
=====================

 Constraint - Primary Key
=====================

How to set the Primary key ?


1- 
CREATE TABLE classes (
        cid int NOT NULL PRIMARY KEY,
        name varchar(255) UNIQUE
);

2-
CREATE TABLE teacher (

    tid int NOT NULL,
    name varchar(255),
    PRIMARY KEY(tid)
)

How to add PRIMARY KEY on the data already exist?

ALTER  TABLE students ADD PRIMARY KEY (id);

How to drop the primary key ?

ALTER TABLE students DROP PRIMARY KEY;



*/

