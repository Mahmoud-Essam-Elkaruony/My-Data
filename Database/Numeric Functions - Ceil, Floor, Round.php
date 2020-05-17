<?php

/*
=====================
== MySQL Datatype  ==
=====================
Numeric Functions - Ceil, Floor, Round
=====================

CEIL(Number)
FLOOR(number)
ROUND(Number, Decimal)

-----------------------------
- CEIL:

SELECT number AS MinNumber, CEIL(number) AS CeilNumber FROM try;

------------------------------------------------------------------->

- Floor:

SELECT number AS MinNumber, FLOOR(number) AS FloorNumber FROM try;

---------------------------------------------------------------------->
- Round:

SELECT number AS MinNumber, ROUND(number) AS RoundNumber FROM try;

- This code with Decimal when you use the Decimal with(2) you will return tow number like this [1.20, 1.99]

==============================

SELECT number AS MinNumber, ROUND(number, 1) AS RoundNumber FROM try

- But when you use the Decimal with (1) you will return tow number like this [1.45 = 1.4,1.55 = 1.6, 1.99 = 2.0, 1.456789 = 1.5]


*/

