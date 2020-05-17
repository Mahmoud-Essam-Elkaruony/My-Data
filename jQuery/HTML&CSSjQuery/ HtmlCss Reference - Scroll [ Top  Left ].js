/*global $, jQuery, alert*/

/*
Html/Css Reference - Scroll [ Top / Left ]
===========================

$(function() {

    "use strict";

    $(window).on('scroll', function(){

        console.log('Window scroll top = ' +  $(this).scrollTop() );

        console.log('Test lasson offset = ' + $('.test').offset().top);

        if ( $(window).scrollTop() >= $('.test').offset().top ) {

            $('.test').animate({

                opacity: 1,
                width: 200,
                height: 100,
                borderRadius: 20,
                
            }, 2000);
        }
    });

});


*/


$(function() {

    "use strict";

    $(window).on('scroll', function(){

        console.log('Window scroll top = ' +  $(this).scrollTop() );

        console.log('Test lasson offset = ' + $('.test').offset().top);

        if ( $(window).scrollTop() >= $('.test').offset().top ) {

            $('.test').animate({

                opacity: 1,
                width: 200,
                height: 100,
                borderRadius: 20,
                
            }, 2000);
        }
    });

    $('button').click(function(){

        $(window).scrollTop(0);
    });

});



