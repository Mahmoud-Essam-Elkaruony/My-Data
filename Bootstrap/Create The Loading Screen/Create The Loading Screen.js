
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

    // Change theme color on click

    let colorLi = $('.color-option ul li')
    colorLi
    .eq(0).css("backgroundColor","#E41B17").end()
    .eq(1).css("backgroundColor","purple").end()
    .eq(2).css("backgroundColor","blue").end()
    .eq(3).css("backgroundColor","yellowgreen");

    colorLi.click(function()
    {
        $("link[href*='theme']").attr("href", $(this).attr("data-valu"));

    });
});

// Loading Screen

$(window).load(function()
{
    // Show the scroll
    $('body').css("overflow","auto");


    $('.loading-overlay .spinner').fadeOut(2000, function() // Will fadeOut h1
    {
        $(this).parent().fadeOut(2000, function() // Will fadeOut Section 
        {
            $(this).remove(); // Will remove the Section 
        });
    });
});