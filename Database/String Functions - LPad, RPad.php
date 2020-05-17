<?php

/*
=====================
== MySQL Datatype  ==
=====================
 String Functions - LPad, RPad
=====================
LPAD()
RPAD()
---------------------
LPAD(String, Length, PaddedString)

SELECT text AS MinText, LPAD(text, 4, '') AS TextWithPaded FROM try; // '' = What is the add you will put with string

----------------------------------------------------->

-- With this code I add [@] on the left string
-- The output will be like that [@@@Ma]
SELECT text AS MinText, LPAD(text, 5, '@') AS TextwithPadad FROM try; 

=====================================================================
RPAD(String, Length, PadedString)

-- The output will be like that [Os$$$$]

SELECT text AS MinText, RPAD(text, 6, '$') AS TextWithPADED FROM try;



*/

