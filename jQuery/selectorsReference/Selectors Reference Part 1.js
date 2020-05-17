/*
Selectors Reference Part 1
============================
-*

$(document).ready(function()
{
  $('*').click(function()
  {
    $(this).fadeOut(3000);
  });
});

$(document).ready(function()
{

  $('body *').css("border","2px solid orange");

});

==================================================
-class

$(document).ready(function()
{

  $('.as').css("border","5px solid orange");

});

==========================================================
-id

$(document).ready(function()
{

  $('#di').css("border","5px solid orange");

});

================================================
- id + class + class 
$(document).ready(function()
{

  $('#di, .as').css("border","5px solid orange");

});

$(document).ready(function()
{

  $('.p, .as').css("border","5px solid orange");

});

==========================================================
- elements + elements 

$(document).ready(function()
{

  $('p, div').css("border","5px solid orange");

});

$(document).ready(function()
{

  $('div, aside').css("border","5px solid orange");

});

================================================================
-Filter 

$(document).ready(function()
{

  $('div').first().css("border","5px solid orange");

});

$(document).ready(function()
{

  $('div').last().css("border","5px solid orange");

});

$(document).ready(function()
{

  $('div:first').last().css("border","5px solid orange");

});


=========================================================

$(document).ready(function()
{

  $('div:first, p:last').css("border","5px solid orange");

});

$(document).ready(function()
{

  $('div:first, p:last, aside:last').css("border","5px solid orange");

});

=========================================================
-elements + class

$(document).ready(function()
{

  $('div, .as').css("border","5px solid orange");

});

==============================================================
-even + odd

$(document).ready(function()
{

  $('div:even').css("border","5px solid orange");

});

$(document).ready(function()
{

  $('div:odd').css("border","5px solid orange");

});


*/

$(document).ready(function()
{

  $('div:odd').css("border","5px solid orange");

});