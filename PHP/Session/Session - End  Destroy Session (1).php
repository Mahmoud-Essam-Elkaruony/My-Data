<?php

// Resume the Session

session_start();

// Unset 

session_unset();

// destroy

session_destroy();

print_r($_SESSION);
