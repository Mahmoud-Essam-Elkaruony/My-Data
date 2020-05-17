<?php

    // This code will remove the cookie

    //setcookie("Background", "", time() - 3600, '/');

    $mainColor = '#FFF'; // Main color

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {

        $mainColor = $_POST['color'];

        setcookie('Backgroung', $mainColor, time() + 3600, '/');
    }

    if (isset($_COOKIE['Background'])) {

        $body = $_COOKIE['Background'];

    }else {

        $body = $mainColor;
    }

?>

<!DOCTYPE html>

<html>

    <head>
        <meta charset="UTF-8">
        <title>Modify Cookie</title>        
    </head>

    <body style="background-color: <?php echo $body; ?>">

        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
            <input type="color" name="color">
            <input type="submit" value="Choose">
        </form>

    </body>

</html>