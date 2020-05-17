<?php

/*
    Explode: explode(Seprator, String, Limit)
*/

/*
$string = "Hello I Love PHP";

echo $string . "<br>";

$array = explode(" ", $string);

echo "<pre>";

print_r($array);

echo "</pre>";

///////////////////////////////////////////

$string = "Hello, I, Love, PHP";

echo $string . "<br>";

$array = explode(",", $string);

echo "<pre>";

print_r($array);

echo "</pre>";

//////////////////////////////////////////

$string = "Hello I Love PHP";

echo $string . "<br>";

$array = explode(" ", $string, 2); // positive

echo "<pre>";

print_r($array);

echo "</pre>";

/////////////////////////////////////////

$string = "Hello I Love PHP";

echo $string . "<br>";

$array = explode(" ", $string, -2); // negative 

echo "<pre>";

print_r($array);

echo "</pre>";

/////////////////////////////////////////////

$string = "Hello I Love PHP";

echo $string . "<br>";

$array = explode(" ", $string, 0); 

echo "<pre>";

print_r($array);

echo "</pre>";

//////////////////////////////////////


*/

$string = "widget, clock, header, footer, debug";

echo $string . "<br>";

$array = explode(" ", $string); 

echo "<pre>";

print_r($array);

echo "</pre>";


for ($i = 0; $i < count($array); $i++) {

    echo "<link rel='stylesheet' 'href='css/" . $array[$i] . ".css'>"; 
}

