
// How to controle about carousel time.

$(document).ready(function(){

    $(".carousel").carousel({

        interval: 5000
    });

    // Show color option div when click on the gear

    $(".gear-check").click(function()
    {
        $(".color-option").fadeToggle();
    });


});