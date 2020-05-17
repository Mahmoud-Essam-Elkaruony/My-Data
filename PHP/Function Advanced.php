<?php 

/*
function sayHello($user, $age= "Unknown", $skill = "Unknown") {

    $result = "Hello " . $user . " Your Age Is " . $age . " And your skill years is " . $skill;

    return $result;
} 

echo sayHello("Mahmoud");

*/

function getTicket($user, $age) {

    $ticket = rand(5000, 1000000);

    if ($age >= 30) {

        $msg = "Hello " . $user . " Your age is " . $age . '<br/>';
        $msg .= "You are qualified to get a ticket congratz :)" . '<br/>';
        $msg .= "You ticket ID is [ <span>" . $ticket . "</span> ]";

    }else {

        $msg = "Hello " . $user . " Your age is " . $age . '<br/>';
        $msg .= "You are not  qualified to get a ticket sorry :(";

    }

    return $msg;
}

$id = getTicket("Mahmoud", 32);

function makeFrame($element) {

    $frame  = "<div class='nice-frame'>";
    $frame .=  $element;
    $frame .= "</div>";

    return $frame;
}

$myElement = makeFrame($id);

?>

<!DOCTYPE html>
<html>

    <head>
        <meta charset="UTF-8">
        <title>Advancd Function</title>
        <style>
            .nice-frame {
                padding: 10px;
                text-align: center;
                width: 400px;
                margin: 20px auto;
                border-radius: 10px;
                background-color: #EEE;
                border: 1px solid #CCC;
                font-family: Tahoma, Arial;
                line-height: 2;
            }
            .nice-frame span {
                font-weight: bold;
                color: #F00;
            }
        </style>
    </head>

    <body>
        <?php echo $myElement; ?>
    </body>

</html>