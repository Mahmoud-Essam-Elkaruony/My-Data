<?php 

// Tata type 

$var1 = "I Love PHP"; // Tata type [1] String

$var2 = 100; // Tata type [2] Integer

$var3 = FALSE; // Tata type [3] 

$var4 = 10.5; // Tata type [4] Floatig Point Number AKA Or Double

$var5 = array( // Data type [5]
    "A" => "Val1",
    "B" => "Val2",
    "C" => "Val13",
);

$var6 = NULL; // Data type [6] NULL

class Book {

    function Book() {

        $this->genre = "Adventure";
    }
}

$var7 = new BooK(); // Tata type [7] Object

$var8 = fopen('DataPHP.txt', 'r'); // Dtat type [8] Resource

echo "<h2>Get type </h2>";

echo gettype($var1) . "<br/>";

echo gettype($var2) . "<br/>";

echo gettype($var3) . "<br/>";

echo gettype($var4) . "<br/>";

echo gettype($var5) . "<br/>";

echo gettype($var6) . "<br/>";

echo gettype($var7) . "<br/>";

echo gettype($var8) . "<br/>";

echo "<h2> Variable Dump </h2>";

var_dump($var1); echo "<br/>";

var_dump($var2); echo "<br/>";

var_dump($var3); echo "<br/>";

var_dump($var4); echo "<br/>";

var_dump($var5); echo "<br/>";

var_dump($var6); echo "<br/>";

var_dump($var7); echo "<br/>";

var_dump($var8); echo "<br/>";











