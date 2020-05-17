<?php

/*
    Asort: asort(Array, Sorting Type)

    Arsort: arsort(Array, Sorting Type)

    ///////////////////////////////

    Ksort: ksort(Array, Sorting Type)

    Krsort: krsort(Array, Sorting Type)


*/
/*
$languages = array(
    "Html"  => 80,
    "Html5" => 70,
    "Css"   => 45,
    "Css3"  => 90,
    "Js"    => 95,
    "PHP"   => 30,
);


// ASort  A = Work with Value

echo "<pre>";

print_r($languages);

echo "</pre>";

//

asort($languages, SORT_REGULAR);

echo "<pre>";

print_r($languages);

echo "</per>";

//////////////////////////


$languages = array(
    "Html"  => 80,
    "Html5" => 70,
    "Css"   => 45,
    "Css3"  => 90,
    "Js"    => 95,
    "PHP"   => 30,
);


// ARSort 

echo "<pre>";

print_r($languages);

echo "</pre>";

//

arsort($languages, SORT_REGULAR);

*/

//////////////////////////////////////////////////////////////

$languages = array(
    "Html"  => 80,
    "Html5" => 70,
    "Css"   => 45,
    "Css3"  => 90,
    "Js"    => 95,
    "PHP"   => 30,
);


// KSort  K = Work woth Key 

echo "<pre>";

print_r($languages);

echo "</pre>";

//

ksort($languages, SORT_REGULAR);

echo "<pre>";

print_r($languages);

echo "</per>";

//////////////////////////


$languages = array(
    "Html"  => 80,
    "Html5" => 70,
    "Css"   => 45,
    "Css3"  => 90,
    "Js"    => 95,
    "PHP"   => 30,
);


// KRSort 

echo "<pre>";

print_r($languages);

echo "</pre>";

//

krsort($languages, SORT_REGULAR);

echo "<pre>";

print_r($languages);

echo "</pre>";

