<?php


/*
    Str_Replace: str_replace(Search, Replace, String, Count[Optional])
*/


/* 

$string1 = "I Love PHP Too Much Because PHP Is Good And Easy Language";

echo $string1 . "<br>";

$string2 = str_replace("PHP", "JavaScript", $string1, $changeCount);

echo $string2 . "<br>" . " Replacements Is " . $changeCount;

////////////////////////////////////////////////////////////////////

// This is the same code 

$string = "I Love PHP Too Much Because PHP Is Good And Easy Language";

echo $string . "<br>";

$string = str_replace("PHP", "JavaScript", $string1);

echo $string;

*/

/* 

$string = "I Love PHP Too Much Because PHP Is Good And Easy Language And PHP Is Famous";

echo $string . "<br>";

// Explode converted to array

$string = explode(" " , $string);

echo "<pre>";

print_r($string);

echo "</pre>";

// Replace PHP with JavaScript inside the array;

$string = str_replace("PHP", "JavaScript", $string);

echo "<pre>";

print_r($string);

echo "</pre>";

// Joined the array into string

$string = implode(" ", $string);

echo $string;

*/

/*
$string = "I Love PHP Too Much Because PHP Is Good And Easy Language And PHP Is Famous";

echo $string . "<br>";

$string = str_replace(array("PHP", "Is", "Easy"), "....", $string);

echo $string;

*/

/* 
$string = "I-Love-PHP|Too-Much=Because@PHP@Is|Good-And-Easy|Language@And-PHP-Is-Famous";

echo $string . "<br>";

$string = str_replace(array("-", "|", "@", "="), array("..", ",,", "//", "::"), $string);

echo $string;

*/


$str = "line 1\nLine 2\n\rLine 3\nLine 4\r";

$order = array("\n", "\n\r", "\r");

echo $str . "<br/>";

$str = str_replace($order, "<br/>", $str);

echo $str;