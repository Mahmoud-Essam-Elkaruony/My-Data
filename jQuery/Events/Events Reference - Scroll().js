/*global $, jQuery, alert*/

/*
Events Reference - Scroll()
=======================

$(function() {

    "use strict";

    $(window).on('scroll', function(){

        console.log('You are scrolling now');
    });

});

$(function() {

    "use strict";

    $(window).on('scroll', function(){

        var sr = $(window).scrollTop()

        console.log(sr);
    });

});


$(function() {

    "use strict";

    $(window).on('scroll', function(){

        var sr = $(window).scrollTop()

        console.log(sr);

        if (sr > 1000) {

            $('.up').fadeIn();

        }else {

            $('.up').fadeOut();
        }
    });

});

*/


$(function() {

    "use strict";

    $(window).on('scroll', function(){

        var sr = $(window).scrollTop()

        console.log(sr);

        if (sr > 1000) {

            $('.up').fadeIn();

        }else {

            $('.up').fadeOut();
        }
    });

});