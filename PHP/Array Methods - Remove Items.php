<?php

/*
    Array_Pop: array_pop(Array)

    Array_Shift: array_shift(array)
*/

//Array_Pop 

$languages = array(
    "Html",
    "Css",
    "JavaScript",
    "PHP",
    "Python",
    "MySQL"
);

echo "<pre>";

print_r($languages);

echo "</pre>";

$lastLanguages = array_pop($languages);

echo "<pre>";

print_r($languages);

echo "</pre>";

echo $lastLanguages;


//Array_Shift 

$delete = array(
    "Html",
    "Css",
    "JavaScript",
    "PHP",
    "Python",
    "MySQL"
);

echo "<pre>";

print_r($delete);

echo "</pre>";

$lastLanguages = array_shift($delete);

echo "<pre>";

print_r($delete);

echo "</pre>";

echo $lastLanguages;
