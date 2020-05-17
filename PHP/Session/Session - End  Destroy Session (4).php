<?php


session_start();

echo 'Hello ' . $_SESSION['username'] . ' You are in room 5' . '<br>';

echo 'Your favourit food now is ' . $_SESSION['favfood'] . '<br>';

echo '<a href="logout.php">Exit</a>';


































