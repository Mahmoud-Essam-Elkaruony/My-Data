<?php

/*
    setcookie(name, value, expire, path, domain, secure, http-only)

    Name: name of the cookie
    Value: content of the cookie
    Expire: expiration date
     

*/

setcookie("School", "Channel", time() + 86400, "/", "localhost", FALSE, TRUE); // 1 Day


// You can print your cookie 
/*
echo '<pre>';

print_r($_COOKIE);

echo '</pre>';
*/