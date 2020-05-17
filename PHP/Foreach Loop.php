<?php 


/*
    Syntax [1] For Indexed Arrays

    foreach ( $array as $value ) {

        // Code to be executed
    }

    Syntax [2] For Associative Arrays

    foreach ($array as $key => $value ) {

        code to be executed
    }

>>>>>>>> For Indexed Arrays

$countries = array('Egypt', 'Saudi Arabia', 'Qatar', 'Bahrain', 'Syria', 'Sudan', 'Palestine');

foreach ($countries as $value) {

    echo $value . '<br/>';
}


*/

// Indexed Arrays
$countries = array('Egypt', 'Saudi Arabia', 'Qatar', 'Bahrain', 'Syria', 'Sudan', 'Palestine');

foreach ($countries as $value) {

    echo $value . '<br/>';
}


//  Associative Arrays
$countries = array(
    'EG' => 'Egypt',
    'SA' => 'Saudi Arabia',
    'Qa' => 'Qatar',
    'Ba' => 'Bahrain',
    'Sy' => 'Syria',
    'Su' => 'Sudan',
    'Pa' => 'Palestine'
);

foreach ($countries as $key => $value) {

    echo $key . " => " . $value . '<br/>';
}
