<?php

    /*
        if(Condition) {
            // Code to run if the condition is true 
        }elseif (Condition) {
            // Code to run is the condition is true 
        }else{
            // Code to run if the condition is false
        }
    */

    $ticketPrice = 500;
    
    if ($ticketPrice > 400 && $ticketPrice < 500) {

        echo "Your Ticket Price is " . $ticketPrice . " USD you have 5% discount";

    }elseif ($ticketPrice >= 500) {

        echo "Your tickect price is " . $ticketPrice . " USD you have 15% discount";

    }else {

        echo "Sorry your ticket price is " . $ticketPrice . " You have no discount";
    }
















