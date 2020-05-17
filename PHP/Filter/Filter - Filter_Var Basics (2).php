<?php


/*
// FILTER_VALIDATE_INT
$input = $_POST['test'];

if (filter_var($input, FILTER_VALIDATE_INT) !== FALSE) {

    echo 'Good the ' . $input . ' You entered is int';

}else {

    echo 'Sorry the ' . $input . ' You entered is not int';
}
>>>>>>>>>>>>>>>>>>>>>>>>
// FILTER_VALIDATE_EMAIL
$input = $_POST['test'];

if (filter_var($input, FILTER_VALIDATE_EMAIL) !== FALSE) {

    echo 'Good the ' . $input . ' You entered is valid';

}else {

    echo 'Sorry the ' . $input . ' You entered is not vali';
}
>>>>>>>>>>>>>>>>>>>>>>>>>>
// FILTER_VALIDATE_IP
$input = $_POST['test'];

if (filter_var($input, FILTER_VALIDATE_IP) !== FALSE) {

    echo 'Good the ' . $input . ' You entered is valid IP Address';

}else {

    echo 'Sorry the ' . $input . ' You entered is not vali IP Address';
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

*/

$input = $_POST['test'];

if (filter_var($input, FILTER_VALIDATE_URL) !== FALSE) {

    echo 'Good the ' . $input . ' You entered is valid URL';

}else {

    echo 'Sorry the ' . $input . ' You entered is not vali URL';
}