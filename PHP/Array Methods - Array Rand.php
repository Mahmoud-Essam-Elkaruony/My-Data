<?php


/*
    array_rand(Array, Number)
*/


$array = array("Mahmoud", "S7S", "Amr", "Hmade", "Bebo", "Mostfe");

$randomKey = array_rand($array, 3);

echo "<pre>";

echo print_r($array);

echo "</pre>";

echo $array[$randomKey[0]] . "<br>";
echo $array[$randomKey[1]] . "<br>";
echo $array[$randomKey[2]] . "<br>";

