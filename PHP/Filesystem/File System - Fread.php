<?php

/*
    fopen(Handle, length);
    
    r: read only starting from beginning of the file (file must be exist)
    r+: read and write starting from beginning of the file (file must be exist)
    w: write only (open and clear the content) (creat the file if not exist)
    w+: write and read (open and clear the content) ( creat the file if not exist)
    a: write only (open and write to the end of file) (creat the file if not exist)
    a+ : write and read ( open and write to the end of file) (creat the file if not exist)
    x: write only (creat a new file) (file must not be exist or give error)
    x+: write and read (creat a new file) (file must not be exist or give error)


*/

/*


*/

//echo filesize('test.txt') . "<br />";

$fileHandle = fopen('test.txt', 'r');

$content = fread($fileHandle, filesize('test.txt'));

echo $content;