/*
Effects - Stop
===============
-stop(clearQueue, goToEnd);
-If you just use STOP() you will stop one of animate and after it will run.
-clearQueue = List of animate.
-True = It is means stop all animate. 
-goToEnd = you will start in the end 
======================================

  $('button').click(function(){

    $('div').stop(true);

  });

*/

$(document).ready(function()
{

  $('button').click(function(){

    $('div').stop(true, true);

  });

  $('div').animate(
    {
      width:'300px',
      height:'200px'
    }, 2000);

    $('div').animate({
      width:'500px',
      height:'100px'
    }, 3000);

    $('div').animate({
      borderRadius:'20px'
    }, 2000);
    
    $('div').animate({
      opacity:'0.2'
    }, 3000);
    

});