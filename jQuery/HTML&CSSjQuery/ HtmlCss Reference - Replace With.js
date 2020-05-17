/*global $, jQuery, alert*/

/*
Html/Css Reference - Replace With
===========================

$(function() {

    "use strict";

    $('div').replaceWith('Hello jQuery');

});

$(function() {

    "use strict";

    $('div').click(function(){

        $(this).replaceWith("<input type='text' value='" + $(this).text() + " '>");

    })

});

*/


$(function() {

    "use strict";

    $('div').click(function(){

        $(this).replaceWith("<input type='text' value='" + $(this).text() + " '>");

        $('button').fadeIn();

    });

    $('button').click(function(){

        $('input').replaceWith("<div>" + $('input').val() + "</div>");

        $('button').fadeOut(2000);
    });

});



