<?php

/*
=====================
== MySQL Datatype  ==
=====================
Control Flow Functions - Case
=====================

If (Condition, True, False)

------------------------------------

Case:
    When expresstion = Value then result
    When expresstion = Value then result
    When expresstion = Value then result
    Else result
End

Case: Expresstion
    When Value then result
    When Value then result
    When Value then result
    Else result
End

---------------------------------------------------

SELECT id, name,

CASE
	
    WHEN number = 10 THEN "Not Bed"
    WHEN number = 15 THEN "Good"
    WHEN number = 24 THEN "Very Weel"
    ELSE "Unkonwn"
    
END AS result

FROM try

SELECT id, name,

----------------------------------

SELECT id, name,

CASE number
	
    WHEN  10 THEN 'Not Bed'
    WHEN  15 THEN 'Good'
    WHEN  24 THEN 'Very Weel'
    ELSE 'Unkonwn'
   
END AS result 

FROM try

CASE
	
    WHEN number <= 10 THEN "Not Bed"
    WHEN number = 24 THEN "Very Weel"
    ELSE "Unkonwn"
    
END AS result

FROM try

-----------------------------------------------------
 
UPDATE `try` SET `number` = 

CASE `number`

	WHEN 10 THEN number + 10
    WHEN 15 THEN number + 15
    WHEN 24 THEN number + 24
    ELSE 'Unknown'
    
END

*/

