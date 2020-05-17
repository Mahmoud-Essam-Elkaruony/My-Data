<?php

$admins = array('Osama', 'Hassan', 'Sayed');

$uesrname = $_GET['uesrname'];

if (in_array($uesrname, $admins)) {

    echo 'Welcome ' . $uesrname . ' To control panel for admin';
    
}else {

    echo 'Sorry this uesrname is not exist in our client area';
}