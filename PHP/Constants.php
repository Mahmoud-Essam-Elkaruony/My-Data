<?php 

/*
    Syntax: define(Name, Value, Caes-Insensitive);
    By Default False

    This is another way = const SITE_STATUS = false;

*/

define("SITE_STATUS", false); // This is Best Prictes

//const SITE_STATUS = false; // This is another way to define CONSTANTS

if (SITE_STATUS == true) {

    $firstName = "Mahmoud";
    echo $firstName . "<br/>"; // Variable

    define("FIRST_NAME", "Osama", true);
    echo First_Name; // Constant

    echo "<br/>";

    $FirstName = "Hassan";
    echo $firstName . "<br/>"; // Variable

    echo PHP_INT_MAX;
    echo "PHP_Int_Max";

    echo __LINE__;

}else {

    echo "Website Is Closed For Maintenance";
}















