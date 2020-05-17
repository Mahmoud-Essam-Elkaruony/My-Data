<?php

/*
=====================
== MySQL Datatype  ==
=====================
String Functions - Concat, Concat_Ws
=====================

CONCAT(String, String, String)
CONCAT_WS(Separator, String, String)

----------------------------------------->
-CONCAT
SELECT Text, CONCAT(Text, ' Added by me') AS mytext FROM try;
SELECT id, Text, CONCAT('The contry is ', Text, ' And its ID is ', id) AS mytextwithid FROM try;

------------------------------------------------
-CONCAT_WS
SELECT id, Text, CONCAT_WS(',', Text, ' Added') AS mytextwithid FROM try;
SELECT id, Text, CONCAT_WS('-', Text, ' Added') AS mytextwithid FROM try;
SELECT id, Text, CONCAT_WS(',', id,text) AS mytextwithid FROM try;

-------------------------------------------------------------------------

SELECT id, Text, CONCAT_WS(',', CONCAT(id, ' '), Text) AS mytextwithid FROM try;


*/

