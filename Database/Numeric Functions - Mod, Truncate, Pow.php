<?php

/*
=====================
== MySQL Datatype  ==
=====================
Numeric Functions - Mod, Truncate, Pow
=====================
TRUNCATE(Number, Decimal)
POW => POWER(Number, Powered)
MOD(Number, Mod)
=====================
TRUNCATE()
-TRUNCATE return number after the Decimal point.
-You can control how many number you need to after the Decimal point.
----------------------
-Like this:
-SELECT number AS MinNumber, TRUNCATE(number, 2) AS TruncateNumber FROM try;

MinNumber 	TruncateNumber 	
1.5 	    1.50
1.906565 	1.90
1.45678689 	1.45

--------------------
-SELECT number AS MinNumber, TRUNCATE(number, 3) AS TruncateNumber FROM try;
MinNumber 	TruncateNumber 	
1.5 	    1.500
1.906565 	1.906
1.45678689 	1.456
===================================================================
POW()

SELECT POW(2, 3); = 2x2x2 = 8

-SELECT number, POWER(number, 2) FROM try;

number 	POWER(number, 2) 	
3 	9
2 	4
4 	16
5 	25

=====================================================
MOD()

SELECT MOD(21, 5); = 1
SELECT MOD(7, 2);  = 1
SELECT MOD(23, 5)  = 3


*/

