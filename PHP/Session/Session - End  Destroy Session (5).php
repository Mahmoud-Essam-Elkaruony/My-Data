<?php

// Resume the session

session_start();

echo 'Hello ' . $_SESSION['username'] . ' You are in room 3' . '<br>';

echo 'Your favourit food is: ' . $_SESSION['favfood'] . '<br>';

echo '<a href="Test.php">Room Number 3</a>';