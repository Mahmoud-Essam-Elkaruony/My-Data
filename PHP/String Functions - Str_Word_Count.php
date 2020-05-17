<?php

/*
    str_word_count(String[Required], Format[Optional], Charlist[Optional])
*/

/*

$string = "I love PHP so much and althoug JavaScript";

echo $string . "<br/>";

$count = str_word_count($string, 1); 1 => will return normall array

echo "<pre>";

print_r($count);

echo "</pre>";

////////////////////////////////////// 

$string = "I love PHP so much and althoug JavaScript";

echo $string . "<br/>";

$count = str_word_count($string, 2); 1 => will return associative array

echo "<pre>";

print_r($count);

echo "</pre>";

*/


$string = "I love PHP so much & althoug JavaScript";

echo $string . "<br/>";

$count = str_word_count($string, 0, "&");

echo $count;