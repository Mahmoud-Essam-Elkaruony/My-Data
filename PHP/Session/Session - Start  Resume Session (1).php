<?php


/*
    session_start(); => Start or Resume session
*/

session_start();

    $_SESSION['username'] = 'Osama'; // This is like var 

    $_SESSION['favfood']  = 'Pizza';

    $_SESSION['Phone']    = 123456789;

    $_SESSION['Work']     = 'Web Developer';  

echo '<a href="Syntax.php">Room Number 2</a>';