/*global $, jQuery, alert*/

/*
Events Reference - submit
=======================



*/


$(function() {

    "use strict";

    $('form').submit(function(event){

        if ($("input:first").val() === 'CONFIRM') {

            $('span').text("Good").show();

            return;
        }

        $('span').text("The word is not correct").show().fadeOut(3000);

        event.preventDefault();
    });

});