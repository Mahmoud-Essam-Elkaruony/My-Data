<?php

/*
=====================
== MySQL Datatype  ==
=====================
String Functions - Repeat, Reverse, Replace
=====================

REPEAT(String, Number of reapeats)
REPLACE(String, From, To)
REVERSE(String)

---------------------------------------->
-REPEAT
SELECT Text, REPEAT(Text, 3) AS repeated FROM try;

-----------------------------------------------------
-REPLACE
SELECT Text, REPLACE(Text, 'a', '@') AS replaced FROM try;
SELECT Text, REPLACE(Text, 'http', 'https') AS replaced FROM try;

------------------------------------
-UPDATE
UPDATE try SET Text = REPLACE(Text, 'http', 'https');
UPDATE try SET Text = REPLACE(Text, 'https://www', '');

---------------------------------------------------------------
-REVERSE
SELECT Text, REVERSE(Text) AS reversed FROM try;
UPDATE try SET Text = REVERSE(Text);

*/

