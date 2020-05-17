<?php


/*
    dirname(Path)
    dirname = Directory Name
    In Windows = Folder Name

    basename(path, suffex)

    
*/

//echo __FILE__;

//echo __DIR__;


//echo dirname(__FILE__,2);

//include __DIR__ . 'C:\xampp\htdocs\PHP_Coures\Syntax.php'; // it dose not work


echo basename(__FILE__, '.php') . "<br />";

