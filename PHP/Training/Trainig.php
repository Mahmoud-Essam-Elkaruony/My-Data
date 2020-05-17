<?php

/*
    [1] Check if the directory is exists or no 
    [2] Make the directory
    [3] Assign this directory to variable
    [4] Create a file inside thie directory 
    [5] Assign thie file to variable 
    [6] Change mode of this file to be read only 
    [7] Check if this file is writable
    [8] Change mode of this file and make it writble 
    [9] Include this file in my project  
*/


if (file_exists(__DIR__ . '/PHP')) {

    echo 'Sorry this directory is exists';

}else {

    mkdir(__DIR__ . '/PHP');
}

$directory = __DIR__ . '/PHP/';

file_put_contents($directory . 'Text.php', "Hello");

$file = $directory . 'Text.php';

chmod($file, 0444); // This code to change mode the file form Writable to not writable

if (is_writable($file)) {

    file_put_contents($file, "File is not writable");

}else {

    chmod($file, 0755);

    file_put_contents($file, "<?php echo 'Congratulations the training is done';");
}

include $file;