<?php

/*
=====================
== MySQL Datatype  ==
=====================
 Control Flow Functions - If
=====================

If (Condition, True, False)

------------------------------------

SELECT id, name, IF(number < 3, 'Hard Luck', 'Congrat') AS result FROM try;
SELECT id, name, IF(number < 3, CONCAT('Hard Luck_', number), CONCAT('Congrate :', number)) AS result FROM try;

-----------------------------

UPDATE try set number = IF(number < 1, number + 10, number);

*/

