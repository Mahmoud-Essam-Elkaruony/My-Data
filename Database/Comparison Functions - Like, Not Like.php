<?php

/*
=====================
== MySQL Datatype  ==
=====================
Comparison Functions - Like, Not Like
=====================
LIKE , NOT LIKE
- % ( Empty or collection of characters)
- _ ( One character)

------------------------
[%] 
- It means if the first sentence empty or not you can use it in multiple places.
- You can use it in the first or middle or in the end. 
- And if you do not know what is the character in the first you just.
- Know some characters when you can use [%] in the first or in middle or in the end.
- It will return for you the sentence includes the characters you input.

SELECT * FROM try WHERE name LIKE '%ame' ; = Osame
SELECT * FROM try WHERE name LIKE '%ama%' ;
SELECT * FROM try WHERE name LIKE '%e%' ;
SELECT * FROM try WHERE name LIKE 'm%d'; 
SELECT * FROM try WHERE name LIKE '%a%a%'; 
SELECT * FROM try WHERE name LIKE '%_%'; it will return evrythin 
----------------------------------------------------
[ _ ] 

- It work just with one character. 
- But you can put it anywhere.

SELECT * FROM try WHERE name LIKE '_ame'; // Here it will not return anything 
                                          // Becuase of it work with one character.  
SELECT * FROM try WHERE name LIKE '_same'; = Osama
SELECT * FROM try WHERE name LIKE 'Sam_h';  

------------------------------------------------------------------
[NOT LIKE]

SELECT * FROM try WHERE name NOT LIKE '%ame' 

*/

