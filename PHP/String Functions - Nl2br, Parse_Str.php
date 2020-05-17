<?php

/*
    parse_str(String, Array)

    nl2br: New line to break tag <br>
    nl2br(String, Xhtml)
*/

/*

$link = "name=Mahmoud&age=32&year=2015&skill=2";

    parse_str($link);

    echo $name;

/////////////////////////////////////

$link = "name=Mahmoud&age=32&year=2015&skill=2";

    parse_str($link, $myArray);

    echo "<pre>";

    print_r($myArray);

    echo "</pre>";



*/

$string = "Hello I love PHP \n althoug \n I love Js \n";

echo nl2br($string);

