<?php

/*
    strpos(String[Requierd], Find[Required], Offset[Optional])

    stripos(String[Requierd], Find[Required], Offset[Optional]) [i]

    strrpos(String[Requierd], Find[Required], Offset[Optional]) [r]

    strripos(String[Requierd], Find[Required], Offset[Optional]) [ri]



*/

/*

// strpos

$string = "I love PHP so much because PHP is famous and cool language";

$pos = strpos($string, "PHP", 9); // 9 => Is Optional

echo $pos;

////////////////////////////////////////

//stripos

$string = "I love PHP so much because PHP is famous and cool language";

$pos = stripos($string, "php"); [i]

echo $pos;


*/

$string = "I love PHP so much because PHP is famous and cool language";

$pos = strrpos($string, "PHP", -22); // [r]

echo $pos . "<br />";


if(strpos($string, "mao")) {

    echo "Yes, It is exist";
}else {

    echo "No, It is not exist";
}
