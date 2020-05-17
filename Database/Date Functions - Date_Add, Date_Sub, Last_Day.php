<?php

/*
=====================
== MySQL Datatype  ==
=====================
Date Functions - Date_Add, Date_Sub, Last_Day
=====================

LAST_DAY(Date)
DATE_ADD(date, INTERVAL Expression timeUnit)  INTERVAL = Counter
DATE_SUB(Date, INTERVAL Expression TimeUnit)  INTERVAL = Counter

------------------------------------------------->
LAST_DAY(Date):

SELECT name, date, LAST_DAY(date) FROM try;
SELECT name, date, LAST_DAY(date), DAYNAME(LAST_DAY(date)) FROM try;

----------------------------------------------------------------------->
DATE_ADD(date, INTERVAL Expression timeUnit):

UPDATE try SET date = DATE_ADD(date, INTERVAL 10 DAY);
UPDATE try SET date = DATE_ADD(date, INTERVAL 1 Month);

------------------------------------------------------------>
DATE_SUB(Date, INTERVAL Expression TimeUnit):

UPDATE try SET date = DATE_SUB(date, INTERVAL 3 MONTH);



*/

