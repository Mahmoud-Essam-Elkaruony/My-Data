/*
Html - Dimensions
===================
-[Width]

$(document).ready(function()
{

  let width = $(document).width();

  console.log(width);
});

$(document).ready(function()
{

  let width  = $(document).width();
  let heitht = $(document).height(); 
  console.log(width);
  console.log(heitht);
});


$(document).ready(function()
{

  let width  = $(document).width();
    
  if (width == 1242) {

    $('body').append('<span>Good</span>').fadeOut(2000);
  
  } else {

    $('body').append('<span>Not Good</span>')
    
  }

});

$(document).ready(function()
{

  $('.dim').click(function()
  {
    let dimWidth = $(this).width(300);

  });

});

$(document).ready(function()
{

  $('.dim').click(function()
  {
    let dimWidth = $(this).width('+=' + 50);

    let text = $(this).text('Your div width is ' + dimWidth + 'px');

    console.log("Your Div Is : " + text + 'px');

  });

});

$(document).ready(function()
{

  $('.left').click(function()
  {
    $(this).width('+=' + 50);
    $('.right').width('-=' + 50);
  });

  $('.right').click(function()
  {
    $(this).width("+=" + 50);
    $('.left').width('-+' + 50);
  });

});


$(document).ready(function()
{

  $('.container').click(function()
  {
    $(this).width("+=" + 50);
    $(this).text( $(this).width() );

    if ( $(this).width() == 700 ) {

      $(this).css(
      {
        maxWidth:"700px",
        width:"700px"
      })

      $(this).append("<span>You cannot width more</span>");
    }

  });

});

$(document).ready(function()
{

  $('.container').click(function()
  {
    $(this).width("+=" + 50);
    $(this).text( $(this).width() );

    if ( $(this).width() == 700 ) {

      $(this).css(
      {
        width:'400px',
        height:'200px',
        background:'orange',
        color:'#000'
      })
    }
  });

});

=======================================================================
-[innerWidth]

- The innerWidth() is the same width it will return to you the padding
- But it dose not work with document if you need to work with document 
- Use the width() 

$(document).ready(function()
{

  $('.container').click(function()
  {

    console.log($(this).innerWidth())

  });

});

======================================================
-[outerWidth]

- outerWidth() return to you the padding and the border 


$(document).ready(function()
{

  $('.container').click(function()
  {

    console.log($(this).outerWidth())

  });

});

$(document).ready(function()
{

  $('.container').click(function()
  {

    console.log($(this).outerWidth(true)) true will add the margin

  });

});

=======================================================
-Height

$(document).ready(function()
{

  $('.container').click(function()
  {

    console.log($(this).height())

  });

});


$(document).ready(function()
{

  $('.container').click(function()
  {

    $(this).height(300);
    console.log($(this).height())

  });

});

$(document).ready(function()
{
  $('.container').click(function()
  {
    $(this).height("+=" + 30);
    console.log($(this).height())
  });
});

=================================================
-innerHeight()


$(document).ready(function()
{
  $('.container').click(function()
  {
    $(this).height("+=" + 30);
    console.log($(this).innerHeight())
  });
});

==================================================
-outerHeight()

$(document).ready(function()
{
  $('.container').click(function()
  {
    $(this).height("+=" + 30);
    console.log($(this).outerHeight())
  });
});



$(document).ready(function()
{
  $('.container').click(function()
  {
    $(this).height("+=" + 30);
    console.log($(this).outerHeight(true))
  });
});


*/

$(document).ready(function()
{
  $('.container').click(function()
  {
    $(this).height("+=" + 30);
    console.log($(this).outerHeight(true))
  });
});