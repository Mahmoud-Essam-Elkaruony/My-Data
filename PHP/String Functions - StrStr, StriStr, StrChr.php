<?php

/*
    strstr(String[Required], Search[Required], Before_Search[Optional])

    stristr(String[Required], Search[Required], Before_Search[Optional]) [i]

*/


/*

$string = "I love PHP so much because PHP is cool";

$string2 = "Mahmoud@gmail.com"; 

$char = strstr($string2, "@");

echo $char;

//////////////////////////////////////

*/

$string = "I love PHP so much because PHP is cool";

$char = stristr($string, "php");

echo $char;
