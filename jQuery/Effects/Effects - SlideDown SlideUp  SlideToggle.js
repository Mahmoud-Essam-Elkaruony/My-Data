/*
Effects - SlideDown / SlideUp / SlideToggle
=============================================
-SlideDown(Speed, CallbackFunction) 

$(document).ready(function()
{

    $('.open').click(function()
    {
        $('.box').slideDown(2000, function()
        {
            $('.open').fadeOut(3000, function()
            {
                $('.me').fadeIn(2000).css('color','#00F');
            });
        });
   
    });

});

$(document).ready(function()
{

    $('.open').click(function()
    {
        $('.box').slideDown(5000, function(){$('.open').hide();});
   
   
    });

});

======================================
-SlideUp()

$(document).ready(function()
{
    $('.open').click(function()
    {
        $('.box').slideUp(3000, function()
        {
            $('.open').hide(4000);
        });
   
    });

});

========================================
-SlideToggle()

$(document).ready(function()
{
    $('.open').click(function()
    {
        $('.box').slideToggle();
   
    });

});

*/

$(document).ready(function()
{
    $('.open').click(function()
    {
        $('.box').slideToggle();
   
    });

});