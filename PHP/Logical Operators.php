<?php 

    /*
        Logical Operators

        [ and ] Condition 1 And Condition 2 And Condition 3

        [ && ] Condition 1 && Condition 2 && Condition 3
        
        [ xor ] One Condition Is True But Not All Another wey One condition is necessary to be true

        [ or ] Condition 1 or Condition 2 or All Condition 

        [ || ] Condition 1 or Condition 2 or All Condition 

        [ ! ] Not Equal

$age = 27;

$skillYears = 3;

$haveCar = "Yes";

if ($age > 28 && $skillYears > 4 && $haveCar === "Yes") {

    echo 'Accepted VIP';

}elseif ($age < 28 && $skillYears < 4 && $haveCar === "Yse") {

    echo 'Accepted';
}else {

    echo 'No Accepted';
}
>>>>>>>>>>>>>>>>>>>>>>>>

$age = 30;

$skillYears = 3;

if ($age > 28 xor $skillYears > 4 ) {

    echo 'Accepted';
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
$var1 = 'Mahmoud';

if (!$var) {

    echo 'Mahmoud';
}
$var1 = 'Mahmoud';

if ($var1 !== 'Osome') {

    echo 'Mahmoud';
}

*/


$age = '40';

$skillYears = 6;

if ($age > 30 || $skillYears > 4 ) {

    echo 'He Is Good';
}