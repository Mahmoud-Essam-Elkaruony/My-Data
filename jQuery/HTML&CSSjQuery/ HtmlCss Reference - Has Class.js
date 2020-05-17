/*global $, jQuery, alert*/

/*
Html/Css Reference - Has Class
===========================

$(function() {

    "use strict";

    $('li').each(function(){

        if ($(this).hasClass('active')) {

            $(this).parent().parent().css('color', '#F00');
        }
    });

});


$(function() {

    "use strict";

    $('li').each(function(){

        if ($(this).hasClass('active')) {

            $(this).next().css('color', '#F00');
        }
    });

});


*/


$(function() {

    "use strict";

    $('li').each(function(){

        if ($(this).hasClass('active')) {

            $(this).next().css('color', '#F00');
        }
    });

});



