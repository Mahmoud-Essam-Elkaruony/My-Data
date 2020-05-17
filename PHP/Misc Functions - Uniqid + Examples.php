<?php


/*
    uniqid(prefix, more_entropy);
    Unique Identifier
*/

/*

$random = uniqid();

echo $random . '<br>';

var_dump($random);


*/

$random = uniqid('name of file here_', TRUE); // it is by default false

echo $random . '<br>';

var_dump($random);