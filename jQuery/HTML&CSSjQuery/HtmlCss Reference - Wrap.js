/*global $, jQuery, alert*/

/*
Html/Css Reference - Wrap
===========================




*/


$(function() {

    "use strict";

    $('#add').click(function(){

        $('span').wrap("<div></div>");
    });

    $('#remove').click(function(){
        
        $('span').unwrap();
    });

});



