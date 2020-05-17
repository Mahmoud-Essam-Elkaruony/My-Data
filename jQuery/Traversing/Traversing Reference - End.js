/*global $, jQuery, alert*/

/*
Traversing Reference - End
===========================

$(function() {

    "use strict";

    $('div').find('span').css('color', '#00F').end()
        .find('strong').css('color', '#F00');

});


*/


$(function() {

    "use strict";

    $('div').find('span').css('color', '#00F').end()
        .find('strong').css('color', '#F00').end()
        .css('font-weight', 'bold');

});



