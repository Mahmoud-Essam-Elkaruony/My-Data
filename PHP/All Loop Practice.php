<?php 

/*
    For ( Exp1, Exp2, Exp3 ) {

        // Code 
    }

    While ( Expression ) {

        // Code 
    }

    foreach( $array as $value ) {

        // Code
    }

    foreach( $array as $key => $value ) {

        // Code
    }

*/

/*
$i = 0;
 
for (;;) {

    if ($i > 20) {

        break;
    }

    echo $i . '<br/>';

    $i++;
}

for ($f = 30; $f >= 0; $f--) {

    echo $f . '<br>';
}

*/

/*
$i = 10;
while ( $i >= 1 ) {

    echo $i . '<br/>';

    $i--;
}

$i = 10;
while ( $i >= 1 ):

    echo $i . '<br/>';

    $i--;
endwhile;
*/

/*
$a = 1;

do{

    echo $a . '<br/>';

    $a++;

}while ($a <= 10);
*/

/*
$friends = array('Mostfe', 'Hoissen', 'Amr', 'Mhab', 'Hmada',); 

foreach( $friends as $value ) {

    echo $value . '<br/>';
}
*/

$friends = array(
    'Mostfe'  =>  ' 01024364423',
    'Hoissen' =>  ' 01066931398', 
    'Amr'     =>  ' 01067727794', 
    'Mhab'    =>  ' 01286153619', 
    'Hmada'   =>  ' 01065100471', 


); 

foreach( $friends as $key => $value ) {

    echo $key . '  This Is The numbers Phone Of My Dear Friends' . $value  . '<br/>';
}


