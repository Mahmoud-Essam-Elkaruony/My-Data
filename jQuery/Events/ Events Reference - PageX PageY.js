/*global $, jQuery, alert*/

/*
Events Reference - PageX PageY
=======================

$(function() {

    "use strict";

    $('html').on('mousemove', function(event){

        $('span').text("X-Axis: " + event.pageX + " Y-Axis: " + event.pageY);
    });

});


*/


$(function() {

    "use strict";

    $('html').on('click', function(event){

        $('.circle').show().offset({

            left: event.pageX,
            top: event.pageY

        });
    });

});