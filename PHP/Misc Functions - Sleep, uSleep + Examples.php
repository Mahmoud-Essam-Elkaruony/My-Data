<?php

/*
    sleep(seconds);
    usleep(Microseconds);
    time_sleep_until(time() + 5) // You set your time without this function [time()]
*/

/*

$name = 'Mahmoud';

sleep(5);

echo $name;

$name = 'Mahmoud';

usleep(25000000);

echo $name;

*/

/* 
function checkFile() {

    if (file_exists('Test.txt')) {

        echo 'Good it is here';

    }else {

        sleep(5);

        checkFile();

    }
}
echo checkFile();
*/

function checkFile() {

    if (file_exists('Test.txt')) {

        echo 'Good file is here';

    }else {

        time_sleep_until(time() + 5);

        checkFile();

    }
}
echo checkFile();