/*
Traversing - First / Last / Eq / Filter / Not
===============================================
-First

$(document).ready(function()
{
  $('div').first().css("border","3px solid #00F");

});

$(document).ready(function()
{
  $('div').first().next().css("border","3px solid #00F");

});

==============================================================
-Last

$(document).ready(function()
{
  $('div').last().css("border","3px solid #00F");

});

$(document).ready(function()
{
  $('div').last().prev().css("border","3px solid #00F");

});

============================================================
-Eq = equal

$(document).ready(function()
{
  $('div').eq(1).css("border","3px solid #00F");

});


$(document).ready(function()
{
  $('body').find('div').eq(1).addClass("Good");

});

$(document).ready(function()
{
  $('div').eq(-2).css("background","#FF0");

});

=======================================================
-Filter

$(document).ready(function()
{
  $('div').filter('.jQ').css("background","#FF0");

});


$(document).ready(function()
{
  $('div').filter( $('.jQ') ).css("background","#FF0");

});

$(document).ready(function()
{
  $('div').filter( function(Number)
  {
    return Number === 1 

  }).css("background","#FF0");

});

===============================================
-Not

$(document).ready(function()
{
  $('div').not('.jQ').css("background","#FF0");

});


$(document).ready(function()
{
  $('p').not( $('div') ).css("background","#FF0");

});

$(document).ready(function()
{
  $('div').not( function(Number)
  {
    return Number === 3

  }).css("background","#FF0");

});

$(document).ready(function()
{
  $('div').not().click( function()
  {
    $('.jQ').fadeOut(3000);

  }).css("background","#FF0");

});


$(document).ready(function()
{
  $('div').not(":contains('jQuery')").css("background","#FF0");

});

*/


$(document).ready(function()
{
  $('div').filter(":contains('jQuery')").css("background","#FF0");

});