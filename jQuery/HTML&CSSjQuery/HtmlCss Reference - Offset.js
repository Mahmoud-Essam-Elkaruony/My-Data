/*global $, jQuery, alert*/

/*
Html/Css Reference - Offset
===========================

$(function() {

    "use strict";

    console.log($('div').offset());

});

$(function() {

    "use strict";

    console.log($('div').offset());

    $('div').offset({
        left:200,
        top:200
    });

    console.log($('div').offset().top); // You can use those Top And Left

});



*/


$(function() {

    "use strict";

    $(window).scroll(function(){

        console.log('Scroll Top = ' + $(this).scrollTop());
        console.log('Div Offset Top = ' + $('div').offset().top);

        var scrolling = $(this).scrollTop(),

            divOffset = $('div').offset().top;

        if (scrolling >= divOffset){

            $('div').fadeOut();
        }
    });

});



