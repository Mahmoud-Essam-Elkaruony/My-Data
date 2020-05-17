<?php 

/*
    Str_Repeat: str_repeat(String[Required], Repeat[Required])

    Str_Shuffle: str_shuffle(String)

    StrLen: strlen(String)

*/

/* 
// str_repeat

$str = "Mahmoud <br/>";

$repeat = str_repeat($str, 20);

echo $repeat;

*/

/* 

// str_shuffle

$string = "Osama";

$shuffle = str_shuffle($string);

echo $shuffle;

*/

// strlen 

$name = "Mahmoud Essam";

$string = strlen($name);

echo $name;

echo $string . "<br/>";


if ($string > 10) {

    echo "Sorry your name is not exist here";
}