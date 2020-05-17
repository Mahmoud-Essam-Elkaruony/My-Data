<?php



setcookie("Zero", "Test", time() + 3600, "/");

if (count($_COOKIE) > 0) {

    echo "Good the cookies are enabled for this website";

}else {

    echo "Sorry the cookies are not enabled please enable it for best browsing";
}

