/*
Events - Click / Dblclick / Mouseenter / Mouseleave / Hover


*/


/*
 
// Click

$(document).ready(function()
{
    $("button").click(function()
    {
        $("p").css("color","#F00");
        $("p").css("margin","10px");
    })
});


---------------------------

// this = button

$(document).ready(function()
{
    $("button").click(function()
    {

         $(this).hide();

    })

});

============================================
// dblclick

$(document).ready(function()
{
    $("button").dblclick(function()
    {
        $("p").hide();
    })

});

$(document).ready(function()
{
    $("button").dblclick(function()
    {
        $(this).hide();
    })

});

========================================
//Mouseenter  

$(document).ready(function()
{
    $("button").mouseenter(function()
    {
        $("p").css("color","#F00");
        $("p").css("padding","20px");
    })

});

=========================================
// mouseleave

$(document).ready(function()
{
    $("button").mouseleave(function()
    {
        $("p").css("color","#00F");
    })

});

$(document).ready(function()
{

    $("button").mouseenter(function()
    {
        $(this).css("color","#F00");
    })

    ,

    $("button").mouseleave(function()
    {
        $("p").hide();
    })

});

==================================================
// Hover

$(document).ready(function()
{
    $("button").hover(function()
    {
        $(this).css("color","#F00");
        $("p").css("color","#00F");
    },
    function()
    {
        $(this).css("color","#808");
        $('p').css("color","#6666");
    });
});

*/


$(document).ready(function()
{
    $("button").hover(function()
    {
        $(this).css("color","#F00"); // this = button
        $("p").css("color","#00F");
    },
    function()
    {
        $(this).css("color","#808");
        $('p').css("color","#6666");
    });
});