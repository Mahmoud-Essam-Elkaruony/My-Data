<?php

/*
    substr(String[Required], Start[Required], Length[Optional])
*/

/*

$string = 'I love PHP so much and programming';

$sub = substr($string, 10, 20);

echo $sub;

////////////////////////////////////////

$string = "I love PHP so much because PHP is famous and cool";

$piece = substr($string, -18, 5); [ - ]

echo $piece;

*/

$string = "I love PHP so much because PHP is famous and cool";

$piece = substr($string, -22, -19);

echo $piece;