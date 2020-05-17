<?php

/*
=====================
== MySQL Datatype  ==
=====================
 Date Functions - Month, Hour, Minute
=====================

MONTH(Date)
MONTHNAME(Date)
HOUR(Date)
MINUTE(Date)

------------------------
MONTH(Date):

SELECT date, MONTH(date) FROM try;

date 	    MONTH(date) 	
2019-09-07     	9
2019-09-09  	9
2019-09-10  	9

---------------------------------------
MONTH(date), MONTHNAME(date);

SELECT date, MONTH(date), MONTHNAME(date) FROM try;

date 	     MONTH(date) 	MONTHNAME(date) 	
2019-09-07 	    9 	            September
2019-09-09 	    9 	            September
2019-09-10 	    9 	            September

-----------------------------------------------------
MONTH(), MONTHNAME(), HOUR():

SELECT date, MONTH(date), MONTHNAME(date), HOUR(date) FROM try;

date 	             MONTH(date) 	        MONTHNAME(date) 	        HOUR(date) 	
2019-09-07 00:00:00 	9                      September            	     0
2019-09-09 00:00:00 	9 	                   September 	                 0
2019-09-10 00:00:00 	9 	                   September 	                 0
2019-09-13 00:00:00 	9 	                   September 	                 0
2019-09-16 00:00:00 	9 	                   September 	                 0
2019-09-16 17:56:24 	9 	                   September 	                17

---------------------------------------------------------------------------------
MONTH(), MONTHNAME(), HOUR(), MINUTE():

SELECT date, MONTH(date), MONTHNAME(date), HOUR(date), MINUTE(date) FROM try;

date 	           MONTH(date) 	  MONTHNAME(date) 	HOUR(date) 	      MINUTE(date) 	
2019-09-07 00:00:00 	9 	      September 	          0 	                0
2019-09-09 00:00:00 	9 	      September 	          0 	                0
2019-09-10 00:00:00 	9 	      September 	          0 	                0
2019-09-13 00:00:00 	9 	      September 	          0 	                0
2019-09-16 00:00:00 	9 	     September 	              0 	                0
2019-09-16 17:56:24 	9 	     September  	          17 	                56
2019-08-09 07:31:29 	8 	      August 	               7 	                31




*/

