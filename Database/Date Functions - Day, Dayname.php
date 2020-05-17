<?php

/*
=====================
== MySQL Datatype  ==
=====================
Date Functions - Day, Dayname
=====================

DAYNAME(Date)
DAYOFMONTH(Date)
DAYOFWEEK(Date)
DAYOFYEAR(Date)

-----------------------------------------------
DAYNAME(Date):
SELECT CURDATE() AS Today, DAYNAME(CURDATE()) AS TodayName;

----------------------------------------------------------------------
- This code with all function.
-SELECT name, date, DAYNAME(date), DAYOFMONTH(date), DAYOFWEEK(date), DAYOFYEAR(date) FROM try;


name 	    date 	    DAYNAME(date) 	DAYOFMONTH(date) 	DAYOFWEEK(date) 	DAYOFYEAR(date) 	
Osame 	    2019-09-07 	  Saturday 	          7 	                7 	             250
Ahmed 	    2019-09-09 	  Monday 	 	      9                     2 	             252
Mahmoud     2019-09-10 	  Tuesday 	 	      10                    3 	             253

*/

