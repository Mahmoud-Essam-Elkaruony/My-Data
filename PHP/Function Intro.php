<?php 

/*
    Syntax 

    function Identifier() {

        // Function Body
    }

*/

function counte() {

    for ($i = 1; $i <= 10; $i++) {

        for ($e = 10; $e > $i; $e--) {

            echo $e . '<br/>';
        }
    }
}

counte();