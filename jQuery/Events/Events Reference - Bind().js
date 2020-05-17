/*
Events Reference - Bind()
==========================
*/

/*global $*/


//  bind() => Is deprecate

$(function()
{

    "use strict"; // For Js line errors

    // Single event with bind

    $(".normal").bind("click", function()
    {
        $(this).hide();
    });

    // Multi event with bind

    $(".normal").bind("mouseenter mouseleave", function()
    {
        $(this).toggleClass("color");
    });

    // Event Map

    $(".map").bind({

        click:function(){$
            (this).text("You did cilcked on me");
        },
        dblclick:function(){
            $(this).text("You did doublclicked on Me");
        },
        mouseenter:function(){
            $(this).text("You are good. keep moving");
        },
        mouseleave:function(){
            $(this).css("border","1px solid #00F").fadeOut(3000)
            .fadeIn(4000, function()
            {
                $(this).css("width","300px");
            });
        }

    });

    /* 
    // Coustom Event with no parameters

    $(".custom").bind("myCustomEvent", function(event) 
    {
        $(this).hide(3000);
    });

    $("button").click(function()
    {
        $(".custom").trigger("myCustomEvent");
    })

    // Custom Event with  parameters

    $(".custom").bind("myCustomEvent", function(event, myName, myWork, myCity) 
    {
        $(this).text("Hi " + myName + myWork + myCity +  " I'm happy for this :)") // This is Div will print those parameters
    });

    $("button").click(function()
    {
        $(".custom").trigger("myCustomEvent", ["Mahmoud ", "web Developer", " Alx"]);
    })

    */

   $(".custom_event").bind("myCustomDesign", function(event, Height, width, Back, Color) 
   {
       $(this).height(Height).width(width);
       $(this).css({

            backgroundColor: Back,
            color: Color

       });
   });

   $("a").click(function()
   {
       $(".custom_event").trigger("myCustomDesign", ["300px", "700px", "red", "#00F"]);
   })


});
