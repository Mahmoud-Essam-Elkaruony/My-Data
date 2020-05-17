/*

Effects - Fade In / Fade Out / Fade Toggle / Fade To
=======================================================

-FadeIn() - fadeIn(Speed, Callback);

$(document).ready(function()
{
    $('button').click(function()
    {
        $('div').fadeIn(20000, function()
        {
            $('span').show();
        });
    });
});

$(document).ready(function()
{
    $('button').click(function()
    {
        $('div').fadeIn(2000, function()
        {
            $('span').fadeIn(3000).css('color','#F00');
        });
    });
});

=====================================
-fadeOut()  (Speed, Callback);

$(document).ready(function()
{
    $('button').click(function()
    {
        $('div').fadeOut(2000, function()
        {
            $('span').fadeOut(3000).css('color','#F00');
        });
    });
});

=============================================
-fadeToggle() (Speed, Callback);

$(document).ready(function()
{
    $('button').click(function()
    {
        $('div').fadeToggle(2000, function()
        {
            $('span').fadeToggle(3000).css('color','#F00');
        });
    });
});

==============================================
-fadeTo() - fadeTo(Speed, Opacity, Callback);

$(document).ready(function()
{
    $('button').click(function()
    {
        $('div').fadeTo(2000, 0.1, function()
        {
            $('div').fadeTo(3000, 1, function()
            {
                $('span').fadeIn('slow').css('color','#00F');
            });
        });


    });
});

*/




$(document).ready(function()
{
    $('button').click(function()
    {
        $('div').fadeTo(2000, 0.1, function()
        {
            $('div').fadeTo(3000, 1, function()
            {
                $('span').fadeIn('slow').css('color','#00F');
            });
        });


    });
});