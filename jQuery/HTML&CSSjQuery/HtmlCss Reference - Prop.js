/*global $, jQuery, alert*/

/*
Html/Css Reference - Prop
===========================

$(function() {

    "use strict";

    $('button').click(function(event){

        event.preventDefault();

        $('input').prop('disabled', 'disabled');

        console.log($('input').prop('disabled'));
    })

});


$(function() {

    "use strict";

    $('button').click(function(event){

        event.preventDefault();

        $('input').prop('disabled', false);

        console.log($('input').prop('disabled'));
    })

});



$(function() {

    "use strict";

    $('button').click(function(event){

        event.preventDefault();

        $('input').prop('disabled', true);

        console.log($('input').prop('disabled'));
    })

});


*/


$(function() {

    "use strict";

    $('button').click(function(event){

        event.preventDefault();

        $('input').prop({

            'disabled': true,
            'name': 'MyField',
            'id': 'Test'
        });

        console.log($('input').prop('id'));
    })

});



