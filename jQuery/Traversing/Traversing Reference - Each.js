/*global $, jQuery, alert*/

/*
Traversing Reference - Each
===========================




*/


$(function() {

    "use strict";

    $('li').each(function(){

        if ($(this).hasClass('test')) {

            $(this).css('color', '#00F');
        }
    });

});



