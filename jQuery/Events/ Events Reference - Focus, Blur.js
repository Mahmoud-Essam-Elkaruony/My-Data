/*global $, jQuery, alert*/

/*
Events Reference - Focus, Blur
=======================
- Focus

$(function() {

    "use strict";

    $('input').on('focus', function(){

        $('div span').fadeIn(1000, function(){

            $(this).fadeOut(2000);

        }).text('The UserName Must Be Here');
    });

});

-------------------------------------
- Blur

$(function() {

    "use strict";

    $('input').on('blur', function(){

        $('div span').fadeIn(1000, function(){

            $(this).fadeOut(2000);

        }).text('The UserName Must Be Here');
    });

});

*/


$(function() {

    "use strict";

    $('input').on('blur', function(){

        $('div span').fadeIn(1000, function(){

            $(this).fadeOut(2000);

        }).text('The UserName Must Be Here');
    });

});