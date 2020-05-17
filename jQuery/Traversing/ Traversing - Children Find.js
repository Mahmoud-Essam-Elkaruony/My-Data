/*
Traversing - Children / Find
=============================
- Children()
- The children method will get just first child of section.
- The children method down step by step 

$(document).ready(function()
{

  $('section').children().css("border","1px solid orange");


});

----------------------------------------------------
- You can add selectors = calsses

$(document).ready(function()
{

  $('p').children('.pp').css('border','1px solid orange');


});
====================================================================>
-Find()
-The Find method will get the element whatever his position
 
$(document).ready(function()
{

  $('section').find('span').css('border','2px solid orange');


});

$(document).ready(function()
{

  $('div').find('p').css('border','2px solid orange');


});

$(document).ready(function()
{

  $('div').find('.sp').css('border','2px solid orange');


});

$(document).ready(function()
{

  $('section').find('*').css('border','2px solid orange');// * It means all elements


});



*/


$(document).ready(function()
{

  $('section').find( $('p:contains("tito")') ).css('border','2px solid orange');


});