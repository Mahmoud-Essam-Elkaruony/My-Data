<?php

date_default_timezone_set('Africa/Cairo');

/*
    date(format, timestamp)
*/

/*
    echo time() . '<br>';
    echo date('Y-m-d');

echo date_default_timezone_get();
echo date_default_timezone_set('Africa/Cairo');

*/

/*

$nextMonth = time()+ (30 * 24 * 60 * 60); 

echo date('Y-m-d h:i:s', $nextMonth) . '<br>';

>>>>>>>>>>>>>>>>>>>>>>>>


*/

$nextWeek = time()+ (7 * 24 * 60 * 60); // This is timestamp you are creat the timestamp what you want

echo date('Y-m-d h:i:s', $nextWeek) . '<br>';
