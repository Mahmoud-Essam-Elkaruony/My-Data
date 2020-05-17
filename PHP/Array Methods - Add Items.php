<?php

/*
    Array_Push: array_push(Array, value1, value2, value3, ....)

    Array_Unshift: array_unshift(Array, value1, value2, value3, ....)

*/

// Array_Push

$lang = array(
    "HTML",
    "HTML5",
    "Css",
    "Css3",
    "Js",
    "PHP",
);

echo "<pre>";

print_r($lang);

echo "<pre>";

array_push($lang, "Python", "MySQL", "Ajax", "XML");

echo "<pre>";

echo print_r($lang);

echo "<pre>";



// Array_Unshift

$array = array(
    "HTML",
    "HTML5",
    "Css",
    "Css3",
    "Js",
    "PHP",
);

echo "<pre>";

print_r($array);

echo "<pre>";

array_unshift($array, "Python", "MySQL", "Ajax", "XML");

echo "<pre>";

echo print_r($array);

echo "<pre>";
