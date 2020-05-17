<?php


session_start();

$_SESSION['name'] = 'Mahmoud';

include 'counter.php';

echo '<a href="about.php">About</a>';