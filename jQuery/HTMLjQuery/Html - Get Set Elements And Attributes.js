/*
Html - Get / Set Elements And Attributes
===========================================
-text()

$(document).ready(function()
{

  let div = $('div').text();

  $('p').text(div);

});

------------------------------------->
$(document).ready(function()
{

  let div = $('div').html(); // It will produce "<tags>Welcome To jQuery</tags>"
                             // <span style="color:red;font-weight:blod;">Welcome To jQuery</span> 
  $('p').text(div);

});

----------------------------------------------------------------->
-val() get value

$(document).ready(function()
{

  $('button').click(function()
  {
    $('input').val( $('div').text() );
  });

});

$(document).ready(function()
{

  $('button').click(function()
  {
    $('.result').text( $('input').val() );
  });

});

------------------------------------------------------>
-attr() If you need to change the attributes

$(document).ready(function()
{

  $('button').click(function()
  {
    $('input').val( $('a').attr('calss') );
  });

});

$(document).ready(function()
{

  $('button').click(function()
  {
       
    $('a').attr('class','007');

  });

});

$(document).ready(function()
{

  $('button').click(function()
  {
       
    $('a').attr('href','https://www.jQuery.com');

  });

});


$(document).ready(function()
{
  $('button').click(function()
  {
  
    $('a').attr(
    {
      'target':'ss',
      'href':'https://www.jQuery.com',
      'class':'jQuery'
    });

  });
});


*/

$(document).ready(function()
{
  $('button').click(function()
  {
  
    $('a').attr(
    {
      'target':'ss',
      'href':'https://www.jQuery.com',
      'class':'jQuery'
    });

  });
});
