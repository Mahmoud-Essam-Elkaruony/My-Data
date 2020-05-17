/*
Html - Append / AppendTo / Prepend / PrependTo / Before / After
================================================================
-append() - append put the elements in the end.

- Child  => appendTo => Parent // This rules for all methods => Prepend / PrependTo
- Parent => append   => Child 

$(document).ready(function()
{

  $('div').append('<p>Hi</P>');

});

$(document).ready(function()
{

  $('div').append('<span><a href="https://www.google.com">Google</a></span>');

});

============================================>
-Prepend() - prepend put the elements in the first.

$(document).ready(function()
{

  $('div').prepend('<span><a href="https:#">Google</a></span>');

});

======================================================>
-before() -  put the elements before. 

$(document).ready(function()
{

  $('div').before('<span><a href="https:#">Google</a></span>');

});

==========================================================>
-after() - put the elements after.

$(document).ready(function()
{

  $('div').after('<span><a href="https:#">Google</a></span>');

});

==============================================================>
-appendTO() - add the elements to another elements and put it in the end.

$(document).ready(function()
{

  $('<p>Hello Paragraph</p>').appendTo('div');

});

========================================================>
-prependTo() - add the elements to another elements and put it in the first.

$(document).ready(function()
{

  $('<p>Hello Paragraph</p>').prependTo('div');

});

*/


$(document).ready(function()
{

  $('<p>Hello Paragraph</p>').prependTo('div');

});