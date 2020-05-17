/*global $, jQuery, alert*/

/*
Events Reference - Change
=======================

$(function() {

    "use strict";

    $('input').on('change', function(){

        $('div h2').text( $(this).val() ); // this = input
    })

    $('textarea').on('change', function(){

        $('div p ').text( $(this).val() ); // this = textarea
    })


    $('select').on('change', function(){

        $('div').css("background-color","#FF0");
    });


});




*/


$(function() {

    "use strict";

    $('input').on('change', function(){

        $('div h2').text( $(this).val() ); // this = input
    })

    $('textarea').on('change', function(){

        $('div p ').text( $(this).val() ); // this = textarea
    })

    $('select').on('change', function(){

        $('div').text("You Have Choosed " + $(this).val() );
    });


});