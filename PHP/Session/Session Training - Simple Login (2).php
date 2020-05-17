<?php

session_start();

$admins = array("Mahmoud", "Ahmed", "Sayed", "Hassan", "Ali");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $user = $_POST['username'];

    if (in_array($user, $admins)) {

        // If is admin

        $_SESSION['user'] = $user;

        echo 'Welcome ' . $_SESSION['user'] . ' You will be redirected to control panel arrea';

        header('REFRESH:5;URL=control.php');

    }else {

        // If not admin

        echo 'Sorry you are not admin plase get out';
    }

}else {

    echo 'Error: You can\'t brwose this page directly';
}