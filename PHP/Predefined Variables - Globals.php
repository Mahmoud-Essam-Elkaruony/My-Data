<?php


/*
    Super Global
*/

// Global Scope

/*
$name1 = "Osama";


function testFunction() {

    // Function Scope

    echo $GLOBALS["name1"];
}
testFunction();
*/

$name = 'Osama'; // In global scope

function test() {

    $name = 'Ahmed'; // In function scope

    echo "Function local name is: " . $name . '<br>';

    echo "Global name is :" . $GLOBALS['name'];
}

test();
