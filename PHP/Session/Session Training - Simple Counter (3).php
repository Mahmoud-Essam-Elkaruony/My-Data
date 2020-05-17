<?php

session_start();

echo 'Hello ' . $_SESSION['name'] . ' How are you today ?';

include 'counter.php';

echo '<a href="Output.php">Home<a/>';