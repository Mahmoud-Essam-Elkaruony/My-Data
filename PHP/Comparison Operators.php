<?php 

    /*
        Comparison Operators

        [ == ] Equals

        [ != ] Not Equals

        [ <> ] Not Equals

        [ === ] Identical 

        [ !== ] Not Indentical

        [ < ] Less Than 

        [ <= ] Less Than Or Equal 

        [ > ] Larger Than
        
        [ >= ] Larger Than Or Equal
    
    */

    $siteLanguages = "Engilsh";

    if ($siteLanguages == "Engilsh" )  {

        $language1 = "Hello ";
        $language2 = "World" ;

    }elseif ($siteLanguages == "Franko" ) {

        $language1 = "Ahla ";
        $language2 = "Bel3alam";

    }else {

        $language1 = "Unknown Language";
        $language2 = "Unknown Language";
    }

?> 

<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <title>HomePage</title>
    </head>
    <body>
        <h1> <?php echo $language1 . $language2 ?> </h1>
    </body>
</html>
