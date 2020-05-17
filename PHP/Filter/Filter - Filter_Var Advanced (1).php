<?php

/*

$input = $_POST['test'];

$option = array(

    'opt' => array(
        'min_range' => 1,
        'max_range' => 999
    )

    // 'flags' =>
); 

if (filter_var($input, FILTER_VALIDATE_INT, $option) !== FALSE) {

    echo 'Good the ' . $input . ' Is from 1 - 999';

}else {

    echo 'The ' . $input . ' Must be between 1 - 999';
}

>>>>>>>>>>>>>>>>>>>>>>>>>

$input = $_POST['test'];

$opt = array(

    'option' => array(

    ),

    'flags' => FILTER_FLAG_IPV4
); 

if (filter_var($input, FILTER_VALIDATE_IP, $opt) !== FALSE) {

    echo 'Good the ' . $input . ' Is IP Version 4';

}else {

    echo 'The ' . $input . ' Is not IP version 4';
}
*/

// This is the other way to chack the flags 

$input = $_POST['test'];


if (filter_var($input, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4) !== FALSE) {

    echo 'Good';

}else {

    echo 'Bad';
}