<?php

/*
echo $_SERVER['SERVER_ADDR'];

echo $_SERVER['SERVER_NAME'];

echo $_SERVER['QUERY_STRING'];

echo $_SERVER['HTTP_REFFRER'];

echo "Your are useing port " . $_SERVER['SERVER_PORT'];

*/

/*

if ($_SERVER['SERVER_NAME'] === 'localhost') {

    echo "Your IP is: 127.0.0.1"; 
}

*/

//echo "Your are useing port " . $_SERVER['SERVER_PORT'];

echo '<pre>';

print_r($_SERVER);

echo '</pre>';