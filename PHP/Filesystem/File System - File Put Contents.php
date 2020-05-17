<?php


/*
    file_put_contents(file, data, mode, context)
    Mode:
    FILE_APPEND
    LOCK_EX
    FILE_USE_INCLUDE_PATH

*/

/*

file_put_contents('Mahmoud.txt', 'This is the new content');

file_put_contents('Mahmoud.txt', '1234567899', FILE_APPEND);

file_put_contents('Mahmoud.txt', '1234567899 New Relod', FILE_APPEND | LOCK_EX);

*/

file_put_contents('Mahmoud.txt', '1234567899 New Relod', FILE_APPEND | LOCK_EX);