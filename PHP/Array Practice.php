<?php

/*
$indexedArray = array(
    "S7S",
    "Amr",
    "Hmade",
    "Bebo",
    "Hissen"
);

$indexedArray[] = "Mostfe"; // Add 

echo $indexedArray[5];

echo "<pre>";

print_r($indexedArray);

echo "</pre>";

for ($show = 0; $show < count($indexedArray); $show++) {

    echo "<li>" . $indexedArray[$show] . "</li>";
};

foreach ($indexedArray as $value) {

    echo $value . "<br/>";
};

*/

/*

$salaries = array(
    "Osama"     => "1000",
    "Ahmed"     => "1500",
    "Ali"       => "1200",
    "Tamer"     => "3200",
    "Gamal"     => "2400",
    "Mahmoud"   => "2300",
);


echo "<pre>";

print_r($salaries);

echo "<pre>";

foreach ($salaries as $key => $value) {

    echo $key . " =>" .  $value . "<br/>";
}

*/

$diet = array(
    "Day1"  => array("Banana", "Apple", "Bread"),
    "Day2"  => array("Meat", "Bread", "Suger"),
    "Day3"  => array("Fish", "Salt", "Apple"),
);


echo "<pre>";

print_r($diet);

echo "</pre>";

foreach ($diet as $day => $food) {

    echo "<h3>In" . $day . " I Will Eat:<h3/>";

    foreach ($food as $kindFood) {

        echo "<li>" . $kindFood . "</li>";
    };

};
