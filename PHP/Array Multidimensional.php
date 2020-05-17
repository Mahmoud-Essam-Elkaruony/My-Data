<?php 

/*
    Type of array

    [ 1 ] Indexed array 
    [ 2 ] Associative array
    [ 3 ] Multidiminsional array

*/

/*
    Multidiminsional array 
    
    Syntax array(
        array(Element, Element, Element),
        array(Element, Element, Element),
        array(Element, Element, Element),
    );


*/

/*
Multidiminsional array


$diet = array(
    array("Apple", "Banana", "Milk"),
    array("Meat", "Apple", "Egg"),
    array("Fish", "Apple"),
    array("Rice", "Apple"),
    array("Bread", "Apple", "Banana"),
    array(
        array("Osama", "Ahmed" , "Sayed"),
        array("Mahmoud", "Ibrahim", "Amr"),
        array(
            array("HTML", "Css", "JS"),
            array(
                array("PHP", "Python", "C#")
            )
        )
    )
);


echo "<pre>";

print_r($diet);

echo "</pre>";

echo $diet[0][0] . "<br/>";
echo $diet[4][2] . "<br/>";
echo $diet[5][0][2] . "<br/>";
echo $diet[5][1][1] . "<br/>";
echo $diet[5][2][0][1] . "<br/>";
echo $diet[5][2][1][0][0][0] . "<br/>";

*/


$diet = array(
    "Day One" => array("Apple", "Banana", "Meat"),
    "Day Two" => array("Watermellon", "Strawberry", "Mango"),
    "Day Therr" => array("Rice", "Fish", "Bread"),
    "Day Four" => array("Kiwi", "Salt",
        array(
        "Salt"      => "10%",
        "Sugar"     => "20%",
        ))
);

echo "<pre>";

print_r($diet);

echo "</pre>";

echo $diet["Day One"][0] . '<br/>';
echo $diet["Day Two"][2];
echo $diet["Day Four"][2][Salt];
echo $diet["Day Four"][2][Sugar];

