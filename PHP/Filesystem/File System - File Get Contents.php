<?php

/*
    file_get_contents(path, include_path, context, offset, max_length)
*/

/*

echo file_get_contents('http://www.google.com');

echo file_get_contents('Read.txt', false, NULL, 6);

echo file_get_contents('Read.txt', false, NULL, 6, 20);



*/

$name = file_get_contents('Read.txt', false, NULL, 6, 11);

file_put_contents('write.txt', $name);
