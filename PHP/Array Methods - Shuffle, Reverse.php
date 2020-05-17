<?php

/*
    Array Reverse : array_reverse(Array, Preserve)

    Shuffle : shuffle(Array)
*/

/*

// Array Reverse 

$langs = array(
    "Html5",
    "Html",
    "Css",
    "Css3",
    "Js",
    "PHP"
);

echo "<pre>";

echo print_r($langs);

echo "</pre>";



$reverse = array_reverse($langs, true); 

echo "<pre>";

echo print_r($reverse);

echo "</pre>";

*/


// Shuffle

$langs = array(
    "Html5",
    "Html",
    "Css",
    "Css3",
    "Js",
    "PHP"
);

echo "<pre>";

echo print_r($langs);

echo "</pre>";



shuffle($langs); 

echo "<pre>";

echo print_r($langs);

echo "</pre>";

