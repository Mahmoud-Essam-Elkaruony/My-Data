/*global $*/

/*
Events Reference - On()
=======================
Syntax On( Event, Child selectoer is Option , Data, Function, Map );
----------------------------------------------------------------------
// Event = "click", child selector = ".normal"  Function = function()
$("body").on("click", ".normal", function() {

    $(this).hide();

});

$(".normal").on("click", function() {

    $(this).hide();

});


*/


$(function() {

    "use strict"; // For Js Line Errors

    // Single Event With On()

    $(".normal").on("click", function() {

        $(this).hide();

    });

    // Multi Event With On()

    $('body').on('mouseenter mouseleave', '.normal', function()
    {
        $(this).toggleClass('color');
    });

    // Custom Event With On()

    $('.custom').on('myEvent', function(
         event,
         myHeight, 
         myWidth, 
         myBackground, 
         myColor,
         myBorder,
         myMargin){

        $(this).height(myHeight).width(myWidth);
        $(this).css({

            backgroundColor: myBackground,
            color: myColor,
            border: myBorder,
            margin: myMargin
        });
    });

    $('button').on('click', function(){

        $('.custom').trigger('myEvent', [
                                            "200px", 
                                            "200px", 
                                            "#DDD", 
                                            "#000",
                                            "4px solid orange",
                                            "10px"
                                        ]);
    });

    // Event Map With On()

    $('.map').on({

        click:      function() { $(this).text("You have clicked on me");},
        dblclick:   function() { $(this).text("You Double clicked me");},
        mouseenter: function() { $(this).text("You have mouse on me");},
        mouseleave: function() { $(this).text("The mouse has gone away");}
    });

    // Future elements event with on()

    $('button').on('click', function(){

        $("<p>This created P</p>").insertAfter($(this));
    });

    $('body').on('click', 'p', function(){
        
        $(this).fadeOut(2000);
    });

});