<?php

// Resume the session

session_start();

echo 'Hello ' . $_SESSION['username'] . ' You are welcome' . '<br>';
echo 'Your favourit food is ' . $_SESSION['favfood'] . '<br>';
echo 'Your Phone Number Is: ' . $_SESSION['Phone'] . '<br>';
echo 'You are work as web developer: ' . $_SESSION['Work'] . '<br>';

echo '<a href="Test.php">Room Number 3</a>';