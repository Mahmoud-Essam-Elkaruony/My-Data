<?php

date_default_timezone_set('Africa/Cairo');


/*
    date(format, timestamp)
*/

/*
echo 'Copyright To Elzero &copy; 2010-' . date('Y') . '<br>'; 

>>>>>>>>>>>>>

$afterTowDays = time() + (4 * 24 * 60 * 60); // this code will show you date like that [1st]

echo  date('jS', $afterTowDays) . '<br>'; 

echo  date('F') . '<br>';  show time of the name of month
*/


echo  date('l jS \Of F Y h:i:s A') . '<br>'; 