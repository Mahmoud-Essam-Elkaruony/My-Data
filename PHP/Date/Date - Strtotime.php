<?php 


echo date_default_timezone_set('Africa/Cairo');


/*
    strtotime(date, time[now])
*/

/*
$time = strtotime('now', time() - 3600);

echo $time . '<br>';


echo date('Y-m-d h:i:s', $time);

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

$time = strtotime('now');
$time = strtotime('+1 day');
$time = strtotime('+5 day');
$time = strtotime('+20 day');
$time = strtotime('-30 day');
$time = strtotime('+1 week');
$time = strtotime('+1 month');
$time = strtotime('+1 year');
$time = strtotime('+1 week 2 day 6 hours'); // One week + tow days + six hours
$time = strtotime('next Friday'); // Accept all days of week

*/


$time = strtotime('last Friday'); // Accept all days of week

echo date('Y-m-d h:i:s', $time);