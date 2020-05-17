<?php


// echo strlen($string) . "<br />";


/*
    substr_count(String, Substring, Strat, Length);

    substr_compare(String1, String2, Strat Position[String1], Length, Case)

*/


/*

//substr_count

$string = "I love PHP so much because PHP is cool and easy thats why PHP is the best";

$count = substr_count($string, "PHP", 6);

echo $count;

/////////////////////////////////////////////////

$string = "I love PHP so much because PHP is cool and easy thats why PHP is the best";


$count = substr_count($string, "PHP", 6, 65);

echo $count;

/////////////////////////////////////////

// substr_compare

$string1 = "Hello Osama";

$string2 = "Osama";

echo substr_compare($string1, $string2, 6);


*/


$string1 = "A OsamaZero";

$string2 = "Osama";

echo substr_compare($string1, $string2, 2, 5, true);