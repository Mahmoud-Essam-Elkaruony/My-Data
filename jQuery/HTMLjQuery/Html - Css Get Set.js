/*
Html - Css Get / Set
=====================
- get

$(document).ready(function()
{

  $('button').click(function()
  {
    let color = $('p').css('color');
    console.log(color);
  });

});

$(document).ready(function()
{

  $('button').click(function()
  {
    let color = $('p').css('color');
    console.log(color);
    $('input').val(color);
    $("<span></span>", 
    {
      text: color
    }).appendTo('body');
  });

});

$(document).ready(function()
{

  $('button').click(function()
  {

    let color = $('input').val();
    $('p').css('color', color);

  });

});


$(document).ready(function()
{

  $('button').click(function()
  {

    let padding = $('input').val();
    $('p').css(
      {
        "background":"#F00",
        "color":"#000",
        "padding": padding
      });
  });

});
*/

$(document).ready(function()
{

  $('button').click(function()
  {

    let padding = $('input').val();
    $('p').css(
      {
        "background":"#F00",
        "color":"#000",
        "padding": padding
      });
  });

});