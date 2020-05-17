<?php 

// [ @ ] Error Control Operator

// $file = @fopen("Data.txt", "r") or die('This file is not found'); 

// (@include('Inclodd.html')) or die('This file is not here');

$server = 'localhost';
$user   = 'Mahmoud';
$pass   = 'HelloPHP';
$db     = 'Our database';

@mysqli_connect($server, $user, $pass, $db) or die('There is something wrong with connection');