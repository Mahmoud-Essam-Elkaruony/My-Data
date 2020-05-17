<?php

/*
    array_fill(Index, Number, Value);

*/

$array = array_fill(0, 6, "Mahmoud"); // Index, Number, Value

echo "<pre>";

echo print_r($array);

echo "</pre>";

///////////////

$array = array_fill(0, 6, array("Mahmoud", "Amr", "Pope")); 

echo "<pre>";

echo print_r($array);

echo "</pre>";


///////////////////

$array = array_fill(0, 10, array_fill(1, 15, "Mostfe") );

echo "<pre>";

echo print_r($array);

echo "</pre>";