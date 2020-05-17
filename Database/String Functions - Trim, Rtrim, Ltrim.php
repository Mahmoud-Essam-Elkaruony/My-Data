<?php

/*
=====================
== MySQL Datatype  ==
=====================
 String Functions - Trim, Rtrim, Ltrim
=====================

You use This code for cut the space and cut anything you need to 

TRIM(Method[Leading - Trailing - Both] [Remove String] FROM [String])
- Methods optinal if not written both will be used.
- Remove string if not wriiten space will be removed.

---------

Thie the code on database

There is may kind of code you can use them

1- SELECT text, TRIM(text) AS textwithoutspace FROM try;
2- SELECT text, TRIM(LEADING FROM text) AS textwithoutspace FROM try; // LEADING = Cut from front of.
3- SELECT text, TRIM(TRAILING FROM text) AS textwithoutsapce FROM try; // TRAILING  = Cut frome the end.
4- SELECT text, TRIM(BOTH FROM text) AS textwithoutsapce FROM try; // BOTH = Will cut from front of end the end.
---------------------------------

[@@Mahmoud@@] Output Mahmoud@@
SELECT text, TRIM(LEADING '@' FROM text) AS textwithtrim FROM try;

[@@Mahmoud@@] Output @@Mahmoud
SELECT text, TRIM(TRAILING '@' FROM text) AS textwithtrim FROM try;

[@@Mahmoud@@] Output Mahmoud
SELECT text, TRIM(BOTH '@' FROM text) AS textwithtrim FROM try;

[@@Mahmoud@@] Output Mahmoud
SELECT text, TRIM('@' FROM text) AS textwithtrim FROM try; // IF you not write BOTH no problem.

------------------------------------------
[ L - R ]
SELECT text, LTRIM(text) AS textwithoutspace FROM try; // Cut frome lft
SELECT text, RTRIM(text) AS textwithoutspace FROM try; // Cut frome right

--------------------------------

You can use this function if you need to know how many characters you have.

SELECT text, TRIM(BOTH FROM text) AS extwithoutspace, CHAR_LENGTH(TRIM(BOTH FROM text)) FROM try;


*/

