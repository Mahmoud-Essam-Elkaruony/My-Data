/*global $, jQuery, alert*/

/*
Html/Css Reference - Detach
=======================

$(function() {

    "use strict";

    var element = $('div');

    $('#remove').on('click', function(){
        
        // DETACH like remove but it will keep all events
        element.detach();
    });

    $('#add').on('click', function(){

        $('body').prepend(element);
    });

});



*/


$(function() {

    "use strict";

    var element = $('div');

    $('#remove').on('click', function(){
        
        element.detach();
    });

    $('#add').on('click', function(){

        $('body').prepend(element);
    });

    element.on('click', function(){

        $(this).css('color', '#1877f2');
    });

});



