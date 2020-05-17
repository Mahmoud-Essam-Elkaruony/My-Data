/*
Effects - Animate
===================
-animate(Parameters, Speed, CallbackFunction)
-Syantx of animate = animate( { css porperties }, Speed, callBackFunction);
-Parameters = It is what elements will animate.
-' += 50px ' = It mane if the div is 500 it will be 5050.
-' -= 50px ' = It mane if the div is 500 it will be 450.
-If you want to write those code of css you should write it like this:
-border-radius = borderRadius 
-font-size = fontSize 
------------------------------------------------->

$(document).ready(function()
{

    $('div').animate({
        width:'500px'
    }, 2000, function(){$('span').fadeIn(1000)});

});

--------------------------------------------------------------

$(document).ready(function()
{

    $('div').animate({
        width:'400px',
        left:'100px',
        height:'300px',
        opacity:'0.8',
        borderRadius:'20px',
    },2000);

});

---------------------------------

$(document).ready(function()
{
    $('div').animate({
        width:'toggle',
        height:'toggle',
        borderRadius:'20px',
    },2000);

    $('div').animate({
        width:'toggle',
        height:'toggle',
    }, 2000);

});

*/


$(document).ready(function()
{

  $('div').animate({
      top:'10px',

  },1000);

  $('div').animate({
    width:'600px',

  },1000);

  $('div').animate({
    height:'400px',

  },1000);

  $('div').animate({
    borderRadius:'20px',

  },1000);
  
  $('div').animate({
    fontSize:'40px',

  },1000);

  $('div').fadeOut(3000);
});