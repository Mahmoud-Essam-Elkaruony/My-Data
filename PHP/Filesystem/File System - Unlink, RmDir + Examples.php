<?php

/*
    unlink(filename, context);

    rmdir(directory)
*/

/*
unlink('unlink.txt');
*/

/*
$file = 'unlink.txt';

if (is_writable($file)) {

    unlink($file);

}else {

    echo 'Sorry the file is not writable';

    chmod($file, 0755);
}
*/

/*
$file = 'unlink.txt';

if (file_exists($file) && is_writable($file)) {

    unlink($file);

}else if (file_exists($file)) {

    echo 'Sorry the file is not writable I will change the permission now please reload to remove';

    chmod($file, 0755);
}
*/

 rmdir('unlink');