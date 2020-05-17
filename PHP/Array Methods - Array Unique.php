<?php

/*
    array_unique(Array, Sorting Type)
*/

$name = array("Mahmoud", "Ahmed", "Mahmoud", "Osama" , "Amr");

$unique = array_unique($name);

echo "<pre>";

echo print_r($name);

echo "</pre>";


echo "<pre>";

echo print_r($unique);

echo "</pre>";