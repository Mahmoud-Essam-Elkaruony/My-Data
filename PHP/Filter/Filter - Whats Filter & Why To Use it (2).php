<?php

/*
    User input
    Cookies
    Web service
    Server variables
    Database Query result
*/



foreach (filter_list() as $filter) {

    echo '<pre>';

    echo $filter;

    echo '</pre>';
}



?>

<form action="chak.php" method="POST">
    <input type="text" name="test">
    <input type="submit" value="send">
</form>