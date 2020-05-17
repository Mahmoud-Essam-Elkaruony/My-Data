<?php

/*

// mkdir
$name = 'Osama';

mkdir($name);

echo 'The directory ' . $name . ' Is created';

////////////////////////////////////////

// rmdir
$name = 'Osama';

rmdir($name);

echo 'The directory ' . $name . ' Is deleted';

/////////////////////////////////////////////////

// is_dir

$name = 'Osama';

if (is_dir($name)) {

    rmdir($name);

    echo 'The directory ' . $name . ' Is deleted';

}else {

   echo 'There\'s no directory with this name ' . $name ;
}

*/

$name = 'Osama';

if (is_dir($name)) {

    rmdir($name);

    echo 'The directory ' . $name . ' Is exists :)';

}else {

   mkdir($name);

   echo 'The directory name ' . $name . ' Is created :)';

}