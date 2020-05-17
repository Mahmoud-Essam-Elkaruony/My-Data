<?php

/*
$input = $_POST['test'];

$goodeInput = filter_var($input, FILTER_SANITIZE_NUMBER_INT);

echo 'Main Input =' . $input . '<br>';

echo 'Input after sanitize =' . $goodeInput . '<br>';

if (filter_var($goodeInput, FILTER_VALIDATE_INT) !== FALSE) {

    echo 'Good';

}else {

    echo 'Bad';
}

>>>>>>>>>>>>>>>>>>>>>>>


*/

$input = $_POST['test'];

// Sanitize input 

$goodeInput = filter_var($input, FILTER_SANITIZE_EMAIL);

// Print the result

echo 'Input after sanitize =' . $goodeInput . '<br>';

// Check for the result

if (filter_var($goodeInput, FILTER_VALIDATE_EMAIL) !== FALSE) {

    echo 'Good';

}else {

    echo 'Bad';
}