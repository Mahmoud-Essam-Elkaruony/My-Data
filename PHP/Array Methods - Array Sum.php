<?php


/*
    array_sum(Array);
*/

$sum = array(20, 30, 40, 50, 60,);

$outPut = array_sum($sum);

echo "<pre>";

echo print_r($sum);

echo "</pre>";

echo $outPut;

////////////////

$sum = array(20, 30, 4.55, "Amr", 50, "Omr", 3.50);

$outPut = array_sum($sum);

echo "<pre>";

echo print_r($sum);

echo "</pre>";

echo $outPut;

/////////////////////////

$sum = array(
    0 => "Mahmoud",
    1 => 2,
    2 => 3,
    3 => 4,
);

$outPut = array_sum($sum);

echo "<pre>";

echo print_r($sum);

echo "</pre>";

echo $outPut;