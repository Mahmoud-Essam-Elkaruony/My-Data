/*
Traversing - Parent / Parents / ParentsUntil
==============================================
-Parent

$(document).ready(function()
{

  $('span').parent().css("border","1px solid #00F"); // get p 

});

$(document).ready(function()
{

  $('p').parent().css("border","1px solid #00F"); // get div 

});

$(document).ready(function()
{

  $('div').parent().css("border","1px solid #00F"); // get section

});


======================================
-Parents will get all parents of all page 

$(document).ready(function()
{

  $('span').parents().css("border","1px solid orange");

});


$(document).ready(function()
{

  $('span').parents('.top').css("border","1px solid orange"); // you can chooes from classes 

});

=================================================================>
- ParentsUntil  you can runing to mine class

$(document).ready(function()
{

  $('span').parentsUntil('.top').css("border","1px solid orange");

});

$(document).ready(function()
{

  $('span').parentsUntil('.top').css("border","1px solid orange").fadeOut(3000);

});

*/


$(document).ready(function()
{

  $('span').parentsUntil('.top').css("border","1px solid orange").fadeOut(3000);

});