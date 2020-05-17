<?php 

/*
    Type of array

    [ 1 ] Indexed array 
    [ 2 ] Associative array
    [ 3 ] Multidiminsional array

*/

/*
    Indexed array 
    
    Syntax array(Element, Element, Element);

*/

/*
$workers = array("Ahmed", "Sayed", "Osama", "Hassan", "Ibrahim", "Nader", "Galal");

$workers[2] = "PHP"; // If you want to ofset 
$workers[] = "Mahmoud";
$workers[] = "Pepo";
$workers[] = "Amr";
$workers[] = "S7S";

echo "<pre>";

print_r($workers);

echo "</pre>";

echo $workers[7];

*/

/*

$languages = array("HTML", "HTML5", "Css", "Css3", array("jQuery", "AngularJS", "Ajax") , "PHP", "Python", "C#");

echo "<pre>";

print_r($languages);

echo "</pre>";

echo $languages[4][1];

*/

/* 
$languages = array("HTML", "HTML5", "Css", "Css3", "JS" , "PHP", "Python", "C#");
$languages[] = "MySQL"; // This is to add in array 

echo "<ul>";

foreach ($languages as $lang) {

    echo "<li>" . $lang . "</li>";
}

echo "</ul>";

*/

$languages = array(
    "HTML",
    "HTML5",
    "Css",
    "Css3",
    "JS",
    "PHP",
    "Python",
    "C#"
);

echo "<ul>";

for ($lang = 0; $lang < count($languages); $lang++) {

    echo "<li>" . $languages[$lang] . "</li>";
}

echo "</ul>";