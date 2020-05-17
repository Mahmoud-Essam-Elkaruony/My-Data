<?php

/*
    exit(massege); => exit and die are the same
    die(massege);

    ( @ ) = To use the your error masssage 
*/
/*
$name = 'Mahmoud';

echo $name;

exit;

echo 'Welcome ' . $name;
*/

/*
$file = 'Test.txt';

$handle = fopen($file, 'r')

    or exit("Unable to find $file");
*/

$file = 'Test.txt';

$handle = @fopen($file, 'r')

    or die("Unable to find $file");