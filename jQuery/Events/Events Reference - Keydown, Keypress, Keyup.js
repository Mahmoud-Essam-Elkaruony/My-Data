/*global $, jQuery, alert*/

/*
Events Reference - Keydown, Keypress, Keyup
=======================

$(function() {

    "use strict";

    $('input').on('keydown', function(){

        $('div').text('You are keydown');
    });

    $('input').on('keypress', function(){

        $('div').text('You arw keypress');
    });

    $('input').on('keyup', function(){

        $('div').text('You are keyup');
    })
});



*/


$(function() {

    "use strict";

    $('input').on('keyup', function(){

        $('div h2').text( $(this).val() ); // this = input
    })

    $('textarea').on('keyup', function(){

        $('div p ').text( $(this).val() ); // this = textarea
    })


});