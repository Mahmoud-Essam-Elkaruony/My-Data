<?php

/*
    addslashes: addslashes(String);

    stripslashes: stripslashes(String);

    strip_tags(String, Allow);

*/


/*
// addslashes(String)

$string = "I wil//l ''go at 6 O'Clock";

echo $string . "<br/>";

$skipped = addslashes($string);

echo $skipped;

//////////////////////////////////////////

// stripslashes(String)

$string = "I will 'go' a't 6 O'Clock";

echo $string . "<br/>";

$skipped = addslashes($string);

echo $skipped . "<br/>";

$clean = stripslashes($skipped);

echo $clean;

////////////////////////////////////////


*/

$string = "I love <b>PHP</b> go to <a href='php.net'>PHP.Net</a> to learn <i>PHP</i>";

echo $string . "<br/>";

$stripped = strip_tags($string, "<b> <i>");

echo $stripped;