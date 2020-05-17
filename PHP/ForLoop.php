<?php 

/*
    Syntax 

    for (Expression 1; Expression 2; Expression 3) {

        Etatement To Execute
    }

    Experession 1 = Intitial Counter 

    for ($i = 1; $i <= 20; $i++) {

        echo $i . "<br/>";
    }
>>>>>>>>>>>>>>>>>>>>>>>

<select name="year">
    <?php 

        for ($year = 1990; $year <= 2019; $year++) {

            echo "<option value='$year'>" . $year . "</option>";
        }
    ?>
</select>

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

$languages = array('HTML', 'Css', 'JavaScript', 'PHP', 'MySQL', 'Python', 'C#');

echo "<ul>";

        for ( $i = 0; $i < count($languages); $i++) {

            echo "<li>" . $languages[$i] . "</li>";
        }

echo "</ul>";


*/

$languages = array('HTML', 'Css', 'JavaScript', 'PHP', 'MySQL', 'Python', 'C#');

echo "<ul>";

        for ( $i = 0; $i < count($languages); $i++) {

            echo "<li>" . $languages[$i] . "</li>";
        }

echo "</ul>";
