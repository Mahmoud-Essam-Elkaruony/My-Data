/*global $, jQuery, alert*/

/*
 Traversing Reference - Has
===========================


$(function() {

    "use strict";

    $('p').has('strong').css('color', '#F00');

});

$(function() {

    "use strict";

    $('p').has('.test').css('color', '#F00');

});

$(function() {

    "use strict";

    $('p, h2, div').has('.test').css('color', '#F00');

});



*/


$(function() {

    "use strict";

    $('p, h2, div').has('.test, sapn').css('color', '#F00');

});



