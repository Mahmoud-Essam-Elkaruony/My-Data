<?php

/*
    Sort: sort(Array, Sorting Type)

    sort($languages, SORT_REGULAR);

    sort($languages, SORT_STRING);

    /////////////////////////

    Rsort: rsort(Array, Sorting Type)


*/

$languages = array(
    "Html",
    "30",
    "Html5",
    10,
    "Css",
    "Css3",
    20,
    "Js",
    "PHP",
    15
);


// Sort 

echo "<pre>";

print_r($languages);

echo "</pre>";

//

sort($languages, SORT_STRING);

echo "<pre>";

print_r($languages);

echo "</per>";

//////////////////////////////

// Rsort

$Rsort = array(
    "Html",
    "30",
    "Html5",
    10,
    "Css",
    "Css3",
    20,
    "Js",
    "PHP",
    15
);

echo "<pre>";

print_r($Rsort);

echo "</pre>";

//

rsort($Rsort, SORT_STRING);

echo "<pre>";

print_r($Rsort);

echo "</per>";

