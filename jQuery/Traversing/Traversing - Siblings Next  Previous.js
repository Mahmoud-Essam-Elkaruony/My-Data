/*
Traversing - Siblings / Next / Previous
==========================================
-Siblings

$(document).ready(function()
{

  $('div:contains(jQuery)').siblings().css("border","3px solid orange");

});


$(document).ready(function()
{

  $('div:contains(jQuery)').siblings().slideUp(3000);

});

$(document).ready(function()
{

  $('div').click(function()
  {
    $(this).siblings().slideUp(3000);
  })

});

$(document).ready(function()
{

  $('div, p').click(function()
  {
    $(this).siblings().slideUp(3000);
  })

});

$(document).ready(function()
{

  $('div, p').click(function()
  {
    $(this).siblings('.p').slideUp(3000);
  })

});

===========================================================
-Next

$(document).ready(function()
{

  $('div, p').click(function()
  {
    $(this).next().fadeOut(3000);
  })

});

$(document).ready(function()
{
  $('div, p').click(function()
  {
    $(this).next().fadeOut(3000);
  })
});

====================================================
-Previous

$(document).ready(function()
{
  $('div, p').click(function()
  {
    $(this).prev().slideUp(2000);
    $(this).prev().slideDown(2000);
  })
});

======================================================
-nextAll

$(document).ready(function()
{
  $('div, p').click(function()
  {
    $(this).nextAll().slideUp(2000);
  })
});


$(document).ready(function()
{
  $('div, p').click(function()
  {
    $(this).nextAll('div').slideUp(2000);
  })
});

=========================================
-prevAll

$(document).ready(function()
{
  $('div, p').click(function()
  {
    $(this).prevAll().slideUp(2000);
  })
});

================================================
-nextUntil - will runing until the certain class or element



$(document).ready(function()
{
  $('div').click(function()
  {
    $(this).nextUntil('.di').css("background","orange");
  })
});


$(document).ready(function()
{
  $('div').click(function()
  {
    $(this).nextUntil('p').css("background","orange");
  })
});

===============================================================
-prevUntil

$(document).ready(function()
{
  $('div').click(function()
  {
    $(this).prevUntil().css("background","orange");
  })
});

*/


$(document).ready(function()
{
  $('p').click(function()
  {
    $(this).prevUntil().css("background","orange");
  })
});