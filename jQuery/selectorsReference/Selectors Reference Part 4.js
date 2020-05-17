/*
Selectors Reference Part 4
===========================
:header
:animated
:focus
:contains
:has
:empty
:parent
:hidden
:visible
:root
:lang
------------------------------------
- :header 

$(document).ready(function()
{
    $(":header").css("color","#00f");

});
------------------------------------------------
- :animated

$(document).ready(function()
{
    $("div").animate({width:'400px'}, 4000);
    $("div").animate({height:'300px'}, 5000);

    $("h1").click(function()
    {
        $(":animated").css({background: '#F00', color: '#FFF'});
    });

});

------------------------------------------------------
- :focus

$(document).ready(function()
{
    $("input").focus();
    $(":focus").css("padding","10px");
});

-------------------------------------------------
- :contains

$(document).ready(function()
{
    $("div:contains('JavaScript')").animate({width:'400px'}, 5000);
});

$(document).ready(function()
{
    $("div:contains('JavaScript')")
    .animate({width:'400px'}, 5000).css({background:'orange'});
});

-------------------------------------------------------------------
- :has

$(document).ready(function()
{
    $("div:has('p')").css("color","#00f")
});

$(document).ready(function()
{
    $("div:has('span')").css("color","#00f")
});

$(document).ready(function()
{
    $("div:has('.tito')").css("color","#00f") // class
});

-------------------------------------------------------------
- :empty

$(document).ready(function()
{
    $(":empty").css("background","#FF0");
});

-----------------------------------------------
- :parent

$(document).ready(function()
{
    $(":parent").css("border","2px solid #FF0");
});

------------------------------------------------
- :hidden

$(document).ready(function()
{
    $("button").click(function()
    {
        $(":hidden").fadeIn(3000);
    });
});

---------------------------------------------------
- :visible

$(document).ready(function()
{
    $("button").click(function()
    {
        $(":visible").fadeOut(3000);
    });
});


$(document).ready(function()
{
    $("button").click(function()
    {
        $("div:visible").fadeOut(3000);
    });
});

$(document).ready(function()
{
    $("button").click(function()
    {
        $("div:visible").fadeOut(3000);
        $("div:hidden").fadeIn(3000);

    });
});

------------------------------------------------
- :root

$(document).ready(function()
{
    $(":root").addClass("Js");
});

$(document).ready(function()
{
    $(":root").css("background","orange");
});

--------------------------------------------------------
- :lang




*/


$(document).ready(function()
{
    $("p:lang('en')").css("background","orange");
    $("p:lang('ar')").css("background","#00F");
});