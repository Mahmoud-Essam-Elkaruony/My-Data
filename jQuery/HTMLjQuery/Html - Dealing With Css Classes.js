/*
Html - Dealing With Css Classes
===================================
- addClass()
- addClass can add tow calss or any number.

$(document).ready(function()
{

  $('button').click(function()
  {
    $('p').addClass('custom');
  });

});

$(document).ready(function()
{

  $('button').click(function()
  {
    $('p').addClass('custom br');
  });

});

$(document).ready(function()
{

  $('button').click(function()
  {
    $('p, .tito').addClass('custom br');
  });

});

$(document).ready(function()
{

  $('button').click(function()
  {
    $('p, .tito, span').addClass('custom br').removeClass('tito');
  });

});

-------------------------------------------------------------
- filter

$(document).ready(function()
{

  $('button').click(function()
  {
    $('p:first').addClass('custom br');
  });

});

$(document).ready(function()
{

  $('button').click(function()
  {
    $('p:last').addClass('custom br');
  });

});

$(document).ready(function()
{

  $('button').click(function()
  {
    $('p:contains("Love")').addClass('custom br');
  });

});

$(document).ready(function()
{

  $('button').click(function()
  {
    $('p:eq(0)').addClass('custom br'); // eq = equal 
  });

});

----------------------------------------------------
-toggleClass()

$(document).ready(function()
{

  $('button').click(function()
  {
    $('p:eq(0)').toggleClass('custom br').fadeOut(3000, function()
    {
      $('.one').fadeIn(3000).css('background','#00F');
    });
  });

});

$(document).ready(function()
{

  $('button').click(function()
  {
    $('p').toggleClass('custom br');
 
  });

});

---------------------------------------------------------->
- removeClass()
- If you do not write any thing in Brackets this method will remove 
- All calss.

$(document).ready(function()
{

  $('button').click(function()
  {
    $('p').removeClass('custom');
 
  });

});

$(document).ready(function()
{

  $('button').click(function()
  {
    $('p').removeClass();
 
  });

});

*/

$(document).ready(function()
{

  $('button').click(function()
  {
    $('p').removeClass();
 
  });

});