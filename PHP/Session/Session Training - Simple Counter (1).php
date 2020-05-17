<?php


if (empty($_SESSION['Output'])) {

    $_SESSION['Output'] = 1;

}else {

    $_SESSION['Output']++;
}

echo '<div>You viewed this page ' . $_SESSION['Output'] . ' Times</div>';
































