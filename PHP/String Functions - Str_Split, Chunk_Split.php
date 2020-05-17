<?php


/*
    Str_Split: str_split(String, Length)

    Chunk_Split: chunk_split(String, Length[Default value 76], End[Default value \r \n])
*/

/* 

// str_split

$string = "Hello I Love PHP";

$split = str_split($string, 6);

echo "<pre>";

print_r($split);

echo "</pre>";

*/

// Chunk_split

$string = "HelloILoveWebDevelober";

echo $string . "<br>";

$array = chunk_split($string, 2, " - ");

echo $array;