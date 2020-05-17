<?php


if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $admins = array('Osama', 'Hassan', 'Sayed');

    $uesrname = $_POST['uesrname'];

    if (in_array($uesrname, $admins)) {

        echo 'Welcome ' . $uesrname . ' To control panel for admin';
        
    }else {
    
        echo 'Sorry this uesrname is not exist in our client area';
    }

}else {

    echo 'Sorry you can not browse this page directly';
}

