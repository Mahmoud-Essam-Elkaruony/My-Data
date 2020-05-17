<?php

/*
    pathinfo(path, options)
*/

/*

echo "<pre>";

print_r(pathinfo(__FILE__));

echo "</pre>";

echo "<pre>";

print_r(pathinfo(__FILE__, PATHINFO_DIRNAME));

echo "</pre>";
*/


$links = pathinfo(__FILE__);

echo $links['dirname'] . "<br>";
echo $links['basename'] . "<br>";
echo $links['extension'] . "<br>";
echo $links['filename'] . "<br>";
