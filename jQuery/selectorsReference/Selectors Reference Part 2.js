/*
Selectors Reference Part 2
============================
first:
last:
first-child:
last-child:
first-of-type:
last-of-type:
(index)nth-child:
(index)nth-of-type:
(index)nth-last-child:
(index)nth-last-of-type:
=============================
-first

$(document).ready(function()
{
  $('p:first').css("border","4px dotted orange");

});

- First-Child
$(document).ready(function()
{
  $("p:first-child").css("border","5px dotted orange");

});

- last-child

$(document).ready(function()
{
  $("p:last-child").css("border","5px dotted orange");

});

- last 

$(document).ready(function()
{
  $("p:last-child").css("border","5px dotted orange");

});

=====================================================
- First-of-type

$(document).ready(function()
{
  $("p:first-of-type").css("border","5px dotted orange");

});

- last-of-type

$(document).ready(function()
{
  $("p:last-of-type").css("border","5px dotted orange");

});

============================================================
- nth-child

$(document).ready(function()
{
  $("p:nth-child(2)").css("border","5px dotted orange");

});

- nth-type

$(document).ready(function()
{
  $("p:nth-last-child(3)").css("border","5px dotted orange");

});

=========================================
- nth-first-child(1)

$(document).ready(function()
{
  $("p:nth-child(2)").css("border","5px dotted orange");

});



-nth-last-child
$(document).ready(function()
{
  $("p:nth-last-child(2)").css("border","5px dotted orange");

});

====================================================
-nth-last-child

$(document).ready(function()
{
  $("p:nth-last-child(1)").css("border","5px dotted orange");

});


- nth-of-type

- nth-last-of-type

$(document).ready(function()
{
  $("p:nth-last-of-type(1)").css("border","5px dotted orange");

});

*/


$(document).ready(function()
{
  $("p:nth-last-of-type(1)").css("border","5px dotted orange");

});
