<?php

/*
    Trim: trim(String, Charlist)
    \0 Null
    \t Tab
    \n New Line
    \r Carriage Return
    \x0B Vertical tab
    " " Space
*/

/*
$string = "I Love PHP";

echo var_dump($string) . "<br/>";

$string = "\x0B \x0B \x0B I love PHP \x0B \x0B \x0B";

echo var_dump($string) . "<br/>";

$trimmed = trim($string);

echo var_dump($trimmed);

/////////////////////////////////////

$string = "I Love PHP";

echo var_dump($string) . "<br/>";

$string = "\x0B \x0B \x0B I love PHP \x0B \x0B \x0B";

echo var_dump($string) . "<br/>";

$trimmed = ltrim($string); [l]

echo var_dump($trimmed);

////////////////////////////////////////


$string = "I Love PHP";

echo var_dump($string) . "<br/>";

$string = "\x0B \x0B \x0B I love PHP \x0B \x0B \x0B";

echo var_dump($string) . "<br/>";

$trimmed = rtrim($string); [r]

echo var_dump($trimmed);

////////////////////////////////////////

This trim with my set:

$string = "I Love PHP";

echo $string . "<br/>";

$trimmed = trim($string, "I L");

echo $trimmed;

//////////////////////////////

$string = "I Love PHP";

echo $string . "<br/>";

$trimmed = rtrim($string, "PH"); [r]

echo $trimmed;

//////////////////////////////////////////

$string = "I Love PHP";

echo $string . "<br/>";

$trimmed = ltrim($string, "I Lov"); [l]

echo $trimmed;


*/

$string = "I Love PHP";

echo $string . "<br/>";

$trimmed = trim($string, "I PHP");

echo $trimmed;