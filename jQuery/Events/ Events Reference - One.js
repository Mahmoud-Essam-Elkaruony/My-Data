/*global $, jQuery, alert*/

/*
Events Reference - One
=======================
- One(Event, Data, Function)

$(function() {

    "use strict";

    $('p').one('click', function(){

        $(this).animate({

            fontSize: "+=30px"
        });
    })

});

$(function() {

    "use strict";

    $('p').one('click dblclick', function(){

        $(this).animate({

            fontSize: "+=30px"
        });
    })

});


*/


$(function() {

    "use strict";

    $('p').one('click dblclick', function(){

        $(this).animate({

            fontSize: "+=30px"
        });
    })

});