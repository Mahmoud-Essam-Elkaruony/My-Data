/*

Effects - Hide / Show / Toggle
===================================

---------------------------------------
-Hide() - hide(speed, callback);

$(document).ready(function()
{

    $("button").click(function()
    {
        $("p").hide();
    });

});

=======================================

$("button").click(function()
{
    $("p").hide(2000); / Here you can defined the value you need 
                       / Or you can use "slow" or "fast". 
});                    / default value for hide is 400 milliseconds 

$("button").click(function()
{
    $("p").hide("slow");

});

$("button").click(function()
{
    $("p").hide("fast");

});

------------------------------------------------------>
-Show()

$(document).ready(function()
{

    $("button").click(function()
    {
        $("p").show();
    });

});


----------------------------------------------------------->
-Toggle()

$(document).ready(function()
{

    $("button").click(function()
    {
        $("p").toggle();
        
    });

});

*/

/*
- Advanced Example

$(document).ready(function()
{

    $("button").click(function()
    {
        $("p").hide(4000, function() // This function it is callback.
        {
            $('span').show(3000).css('color','#F00');
        });

    });

});

------

$(document).ready(function()
{

    $("button").click(function()
    {
        $("p").hide(4000, function()  // This function it is callback.
        {
            $('span').show(3000).css('color','#F00');
            $('button').css('color','#00F');
        });

    });

});

-------------------

$(document).ready(function()
{

    $("button").click(function()
    {
        $('p').toggle(3000, function(){

            $('span').toggle();
        });    

    });

});

*/


$(document).ready(function()
{

    $("button").click(function()
    {
        $('p').toggle(1000).css('color','#F00');
        $('span').toggle(2000).css('color','#00F');
        $(this).toggle(3000).css('color','#080');

    });

});