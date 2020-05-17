/*global $, jQuery, alert*/

/*
Traversing Reference - Is
===========================


$(function() {

    "use strict";

    $('span').click(function(){

        if ($('span').parent().is('div')) {

            console.log('Yes, It is div');
        }
    })
});


$(function() {

    "use strict";

    $('span').click(function(){

        if ($('span').is('span')) {

            console.log('Yes, It is span');
        }
    })
});

$(function() {

    "use strict";

    $('span').click(function(){

        if ($(this).parent().is('.par')) {

            console.log('Yes, The parent has class .par');
        }
    })
});

$(function() {

    "use strict";

    $('span').click(function(){

        if ($(this).is(':first-child')) {

            console.log('Yes, This is first child');
        }
    })
});



$(function() {

    "use strict";

    $('span').click(function(){

        if ($(this).is(':first-child, :last-child')) {

            console.log('Yes, This is first span or last span');
        }
    })
});

*/


$(function() {

    "use strict";

    $('span').click(function(){

        if ($(this).parent().is(":contains(JavaScript)")) {

            console.log('Yes');
        }
    });
});



