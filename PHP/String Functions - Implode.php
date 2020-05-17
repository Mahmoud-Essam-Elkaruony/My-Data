<?php


/*
    Implode(Separator, Array)

    Join(Separator, Array)
*/


$array = array("Mahmoud", "Amr", "S7S", "Mostfe");

$string = implode(" ", $array);

echo "Hello our moderators name is: ";

for ($i = 0; $i < count($array); $i++) {
    
    echo "<li>" . $array[$i] . "</li>";
}


////////////////////////////

$array = array("Mahmoud", "Amr", "S7S", "Mostfe"); 

$string = join(" ", $array); // Join is exactly the implode but the name is change

echo "Hello our moderators name is: " . $string;




