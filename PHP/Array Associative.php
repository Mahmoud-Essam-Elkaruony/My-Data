<?php 

/*
    Type of array

    [ 1 ] Indexed array 
    [ 2 ] Associative array
    [ 3 ] Multidiminsional array

*/

/*
    Associative array 
    
    Syntax array(
        Key1 => Value1, 
        Key2 => Value2,
        Key3 => Value3
    );

    The Key accept just Number or String
    The key must be unique
    Value can be the same

*/

$name = "Mahmoud";

$languages = array(
    "HTML"   => "50%", 
    "HTML5"  => "80%",
    "Css"    => "50%",
    "Css3"   => "50%",
    "Js"     => "70%",
    "PHP"    => "33%",
    "Python" => "90%",
    "C#"     =>  "0%",   
);

$languages["MySQL"] = "0%";



echo "<pre>";

print_r($languages);

echo "</pre>";



echo "<ul>";

foreach ($languages as $lang => $progress ) {

    echo "<li>" . $lang . " => " . $progress . "</li>"; 
}

echo "</ul>";