<?php


/*
    copy(oldfile, newfile);

    rename(oldname, newname, context);
*/

//file_put_contents('Osama.txt', 'Hello Osama');

/*
// Copy 
copy('Osama.txt', 'osama_new.txt');

if (!copy('Osama.txt', 'osama_new.txt')) {

 
    echo "Sorry file is not copied";

}else {

    echo "The file has been copied";
}

function copyFile($new) {

    $original = __FILE__;

    return copy($original, $original . '.' . $new);

}
copyFile("Good Pro");

/////////////////////////////////////////////////////////////

// rename

rename('test.txt', 'new.txt');


*/

/*

// I wes make this function as a task hhhhh

function makeDir() {

    mkdir(__DIR__ . '/PHP/'); // Make the Directory

    // rename the file 'new.txt' and change the name to 'file.txt' and cange the path to the 
    // new directoyr PHP
    rename('new.txt', __DIR__ . '/PHP/file.txt'); 

    // get the path of the directory 
    $directory = __DIR__ . '/PHP/';

    // put contents of file 'file.txt'
    file_put_contents($directory . 'file.txt', "Good Mahmoud");

}
makeDir();
*/


//copy(__FILE__, __DIR__ . '/Backup/2019.bak');
