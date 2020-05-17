/*global $, jQuery, alert*/

/*
Events Reference - PreventDefault
=======================

$(function() {

    "use strict";

    $('a').on('click', function(event){
        
        event.preventDefault();

        $('img').fadeIn(500);
    });

});


*/


$(function() {

    "use strict";

    $('a').on('click', function(event){
        
        event.preventDefault();

        $('img').fadeIn(500);

        if (event.isDefaultPrevented()) {

            $('div').text('The link will not work');

        } else {

            $('div').text('The link will go to google');
        }
    });

});