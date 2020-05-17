/*global $, jQuery, alert*/

/*
Events Reference - Resize
=======================

$(function() {

    "use strict";

    $(window).on('resize', function(){

        let wid = $(window).width(),
            hei = $(window).height();

        console.log(wid, hei);

    });

});


*/


$(function() {

    "use strict";

    $('section').height($(window).height());

    $(window).on('resize', function(){

        $('section').height($(window).height());

        let wid = $(window).width(),
            hei = $(window).height();

        console.log(wid, hei);

        if (wid < 720) {

            $('div').removeClass('hidden');

        } else{

            $('div').addClass('hidden');
        }

    });

});