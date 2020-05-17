<?php

/*
    strcmp(String1, String2)

    =0 => The two strings are equals
    >0 => The string one larger than string two
    <0 => The string one less than string two

    strncmp(String1, String2) [n]

    strrev(string)



*/

/*

$string1 = "PHP";

$string2 = "PHP";

echo strcmp($string1, $string2);

////////////////////////////////////////////


$string1 = "PHPpppp";

$string2 = "PHP";

echo strncmp($string1, $string2, 7); [n]


*/

$string1 = "PHPpppp";

$string2 = "PHP";

echo strncmp($string1, $string2, 7);

echo "<br />";

$name = "Mahmoud";

echo strrev($name);