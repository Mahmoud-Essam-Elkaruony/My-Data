<?php

/*
=====================
== MySQL Datatype  ==
=====================
Date Functions - DateDiff + Examples
=====================

DATEDIFF(Date1, Date2)

- This function make compared betwee The date1 ans the date2 and return the value.

SELECT id, name, date, DATEDIFF(CURDATE(), date) AS NumberOfDays FROM try;

-------------------------------------------------------------
Some Examples:

SELECT id, name, date, CONCAT('Register ', DATEDIFF(CURDATE(), date), ' Days Ago.') AS NowDate FROM try;






*/

