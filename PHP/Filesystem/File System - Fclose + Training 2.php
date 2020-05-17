<?php

/*
    fclose(handle)

    r: read only starting from beginning of the file (file must be exist)
    r+: read and write starting from beginning of the file (file must be exist)
    w: write only (open and clear the content) (creat the file if not exist)
    w+: write and read (open and clear the content) ( creat the file if not exist)
    a: write only (open and write to the end of file) (creat the file if not exist)
    a+: write and read ( open and write to the end of file) (creat the file if not exist)
    x: write only (creat a new file) (file must not be exist or give error)
    x+: write and read (creat a new file) (file must not be exist or give error)
*/


/*
$fileHandle = fopen('test.txt', 'r+'); [r+]

fwrite($fileHandle, 'M');

>>>>>>>>>>>>>>>>>

$fileHandle = fopen('test.txt', 'a'); [a]

fwrite($fileHandle, 'M');

>>>>>>>>>>>>>>>>>>>

$fileHandle = fopen('test.txt', 'a+'); [a+]

$read = fread($fileHandle, 12);

echo $read;

$fileHandle = fopen('test.txt', 'a+');

$read = fread($fileHandle, filesize('test.txt'));

echo $read;

>>>>>>>>>>>>>>>>>>>>>>>>>>>

$fileHandle = fopen('test.txt', 'a+');

fwrite($fileHandle, 'Mahmoud', 4); [fwrite]

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

$fileHandle = fopen('test.txt', 'r+');

fseek($fileHandle, 4);  [fseek]

fwrite($fileHandle, 'Z');

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

$fileHandle = fopen('test.txt', 'r+');

fseek($fileHandle, 4); // Here is start 

fwrite($fileHandle, 'Z');

fseek($fileHandle, 2, SEEK_CUR); // [SEEK_CUR] And here will continue

fwrite($fileHandle, 'o');

fclose($fileHandle);



*/

$fileHandle = fopen('test.txt', 'r+');

fseek($fileHandle, 4); // Here is start 

fwrite($fileHandle, 'Z');

fseek($fileHandle, 2, SEEK_CUR); // [SEEK_CUR] And here will continue

fwrite($fileHandle, 'o');

fseek($fileHandle, -2, SEEK_END);

fwrite($fileHandle, 'e');

fclose($fileHandle);