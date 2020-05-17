<?php 

/*
    Syntax 

    while ( Expression ) {

        // Statement To Execute 
    }

*/

$c = 1;

while ( $c <= 20 ) {

    echo $c . "<br/>"; 

    $c++;
}

// Another way 

$i = 0;

while ( $i <= 30 ):

    echo $i . "<br/>";

    $i++;

endwhile;
