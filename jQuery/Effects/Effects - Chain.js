/*
Effects - Chain
=================
-Chan

$(document).ready(function()
{
  let div = $('div');
      div.slideUp(2000).slideDown(2000).fadeOut(2000).fadeIn(2000);
});

-----------------------------------
$(document).ready(function()
{

  let div = $('div');
      div.slideUp(2000)
      .css({
        background:'#rgb(217, 255, 3)',
        borderRadius:'10px',
        fontSize:'30px'
      })
      .slideDown(2000)
      .fadeOut(2000)
      .fadeIn(2000)
      
});

--------------------------------------------------------

$(document).ready(function()
{

  let div = $('div');
      div.slideUp(2000)
      .css({
        background:'#rgb(217, 255, 3)',
        borderRadius:'10px',
        fontSize:'30px'
      })
      .slideDown(2000)
      .fadeOut(2000)
      .fadeIn(2000)
      .hide(3000)
      .show(4000)
      .animate({
        width:'500px',
        height:'400px'
      }, 4000)
      
});



====================================
-This is code without Chin

$(document).ready(function()
{

  let div = $('div');
      div.slideUp(2000);
      div.slideDown(2000);
      div.fadeOut(2000);
      div.fadeIn(2000);
      div.animate({
          width:'100px',
          height:'200px',
          borderRadius:'10px',
          padding:'20px'
      }, 3000);

});



*/

$(document).ready(function()
{

  let div = $('div');
      div.slideUp(2000)
      .css({
        background:'#rgb(217, 255, 3)',
        borderRadius:'10px',
        fontSize:'30px'
      })
      .slideDown(2000)
      .fadeOut(2000)
      .fadeIn(2000)
      .hide(3000)
      .show(4000)
      .animate({
        width:'500px',
        height:'400px'
      }, 4000)
      
});
