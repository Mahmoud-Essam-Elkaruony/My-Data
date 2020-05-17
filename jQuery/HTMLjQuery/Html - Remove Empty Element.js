/*
Html - Remove / Empty Element
===============================
-remove()
- remove can 

$(document).ready(function()
{

  $('button').click(function()
  {
    $('div').remove();
  });

});

$(document).ready(function()
{

  $('button').click(function()
  {
    $('div').remove('.jquery'); // Here we choose the name of element by his class.
  });

});

===================================================>
-empty() - empty element let it 

$(document).ready(function()
{

  $('button').click(function()
  {
    $('div').empty();
  });

});

$(document).ready(function()
{

  $('button').click(function()
  {
    $('div.jquery').empty();
  });

});

*/


$(document).ready(function()
{

  $('button').click(function()
  {
    $('div.jquery').empty();
  });

});