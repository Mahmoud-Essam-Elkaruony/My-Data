<?php

session_start();

if (isset($_SESSION['user'])) {

    echo 'Welcome ' . $_SESSION['user'] . ' You are admin';

}else {

    echo 'You are not permitted to see this page';
}