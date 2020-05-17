<?php

$i = 1; // First expression [ Initial Counter ]

for (;;) {

    if ($i > 20 ) { // Second Expression [ Condition ]

        break;
    }

    echo "This is advanced  Loop " . " " . $i++ . "<br/>";  // Third Expression [ Increment ]
}