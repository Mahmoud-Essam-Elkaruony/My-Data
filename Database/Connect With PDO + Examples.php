<?php


/*

*/

$dsn = 'mysql:host=localhost;dbname=products'; // Data source name

$user = 'root'; // The user to connect

$password = ''; // PAssword of this user 

$option = array(

    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
);

try {

    $db = new PDO($dsn, $user, $password, $option); // Start a new connection with PDO class
    
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $query = "INSERT INTO items (name) VALUES ('منتج4')";

    $db->exec($query);
}

catch(PDOException $e) {

    echo 'Failed ' . $e->getMessage();
}

