<?php

/*
    in_array( Needle, Haystack, Type ) 

    array_search(Needle, Haystack, Type)

    array_key_exists(Needle, Haystack)

*/


/*
// in_array( Needle, Haystack, Type ) 

$languages = array(
    "HTML",
    "Css",
    "PHP",
    "Js",
    "MySQL",
    "Ruby",
    "Python",
);

if (in_array("<vdlv", $languages)) {

    echo "Yes It is Exist";
};
>>>>>>>>>>>>>>>>>>>>>
$languages = array(
    "HTML",
    "Css",
    "PHP",
    "Js",
    "MySQL",
    "Ruby",
    "Python",
    "10"

);

if (in_array(10, $languages, true)) { // True = identical

    echo "Yes It is Exist";
};

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// array_search(Needle, Haystack, Type)

$array = array(
    "HTML",
    "Css",
    "PHP",
    "Js",
    "MySQL",
    "Ruby",
    "Python",
    

);

$lang = array_search("Css", $array, true);

echo "Yes, Its found in index " . $lang . " And the value is " . $array[$lang];


*/

// array_key_exists(Needle, Haystack)

$array = array(
    "HTML"      => "10%",
    "Css"       => "20%",
    "PHP"       => "30%",
    "Js"        => "40%",
    "MySQL"     => "50%",
    "Ruby"      => "60%",
    "Python"    => "70%",
    

);

if (array_key_exists("Js", $array)) {

    echo "Yes, Its found";
}
