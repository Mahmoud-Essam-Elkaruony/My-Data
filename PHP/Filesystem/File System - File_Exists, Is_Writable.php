<?php

/*
    If you need to know the full path :

    echo dirname(__FILE__);
*/

//echo dirname(__FILE__);

/*
// file_exists

$file = 'C:\xampp\htdocs\PHP_Coures\mahmoud.txt';

if (file_exists($file)) {

    echo 'Good the file [ ' . $file . ' ] is found';
    
    file_put_contents($file, 'Added with PHP file put contents');

} else {

    echo 'Sorry the file [ ' . $file . ' ] is not found but I created it with PHP';

    file_put_contents($file, 'created by PHP');
}

//////////////////////////////////////////////////


*/


$file = 'C:\xampp\htdocs\PHP_Coures\mahmoud.txt';

if (is_writable($file)) {

    echo 'Good the file [ ' . $file . ' ] is writable';
    
    file_put_contents($file,'The file is writble'); 
    
    

} else {

    echo 'Sorry the file [ ' . $file . ' ] is not writable so I cannot add contant to it';

    echo "<br />";

    file_put_contents($file, 'created by PHP');
}