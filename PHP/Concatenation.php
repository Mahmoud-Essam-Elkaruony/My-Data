

<?php
    $lessoName = "Concatention";
    $homePage  = "PHP - " . $lessoName;
    $heading   = "Welcome to " . $lessoName;
    $brief     = "This lesson talk about " . $lessoName . " and how to use it";
    $languages = "<ul>";
        $languages .= "<li>HTML</li>";
        $languages .= "<li>Css</li>";
        $languages .= "<li>JavaScript</li>";
        $languages .= "<li>PHP</li>";
        $languages .= "<li>SQL</li>";
    $languages .= "</ul>";
?>

<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <title><?php echo $homePage ?></title>
    </head>
    <body>
        <h1> <?php echo $heading; ?> </h1>
        <p> <?php echo $brief; ?> </p>
        <h2> This is the website languages </h2>
        <?php echo $languages ?>
    </body>

</html>
