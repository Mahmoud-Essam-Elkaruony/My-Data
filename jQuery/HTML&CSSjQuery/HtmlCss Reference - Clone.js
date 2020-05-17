/*global $, jQuery, alert*/

/*
Html/Css Reference - Clone
=======================

$(function() {

    "use strict";

    $('button').on('click', function(){

        $('div').clone().appendTo('body');
    });
 
});


$(function() {

    "use strict";

    $('button').on('click', function(){

        // FALSE it mean copy the element but do not take attributes.
        // If you use TRUE it will take the attributes.
        $('.main').clone(false).appendTo('body'); 
    });

    $('.main').on('click', function(){

        $(this).css('color', '#1877f2');
    });
 
});



*/


$(function() {

    "use strict";

    $('button').on('click', function(){

        $('.main').clone(true).appendTo('body'); // FALSE it mean copy the element
    });

    $('.main').on('click', function(){

        $(this).css('color', '#1877f2');
    });
 
});



