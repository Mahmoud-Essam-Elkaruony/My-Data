/*
Selectors Reference Part 3
============================
-only-child

$(document).ready(function()
{
    $("p:only-child").css("border","4px solid orange");
    
});

---------------------------------------------------------------------
-only-of-type

$(document).ready(function()
{
    $("p:only-of-type").css("border","4px solid orange");
    
});

----------------------------------------------------------------
- div > p . > = It mean the direct child of element.

$(document).ready(function()
{
    $("div > p").css("border","4px solid orange");
    
});

-----------------------------------------------------------------
- div + p 
[ + ] It mean I need this element and make this effect on it 
- after div. It work like next

$(document).ready(function()
{
    $("div + p").css("border","4px solid orange");
    
});

$(document).ready(function()
{
    $("div + h3").css("border","4px solid orange");
    
});

-----------------------------------------------------------
-div ~ h3
[ ~ ] It mean make the effect on the siblings.

$(document).ready(function()
{
    $("div ~ h3").css("border","4px solid orange");
    
});

-------------------------------------------------------------
-ul li:eq(0)"). eq = index 

$(document).ready(function()
{
    $("ul li:eq(0)").css("border","4px solid orange");
    
});

------------------------------------------------------
- ul li:gt(0) [gt] = greater than 

$(document).ready(function()
{
    $("ul li:gt(0)").css("border","4px solid orange");
    
});

$(document).ready(function()
{
    $("ul li:gt(1)").css("border","4px solid orange");
    
});

-------------------------------------------
- ul li:lt(3) [lt] = lower than

$(document).ready(function()
{
    $("ul li:lt(3)").css("border","4px solid orange");
    
});

---------------------------------------------------------
-ul li:not(:contains('2')) = Get to me all element without number [2]

$(document).ready(function()
{
    $("ul li:not(:contains('2'))").css("border","4px solid orange");
    
});


*/


$(document).ready(function()
{
    $("ul li:not(:contains('2'))").css("border","4px solid orange");
    
});