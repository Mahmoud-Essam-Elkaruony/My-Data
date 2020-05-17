<?php


/*
    scandir(dir, sort, context)
*/

/*
$link = __DIR__ . '/osama';

$files = scandir($link);

echo "<pre>";

print_r($files);

echo "</pre>";
*/


$link = __DIR__ . '/osama';

$files = scandir($link);

echo "<pre>";

print_r($files);

echo "</pre>";


foreach($files as $file) {

    if (is_file($link . '/' . $file)){

        unlink($link . '/' . $file);
    }
}