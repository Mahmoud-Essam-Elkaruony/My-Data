/*
Selectors Reference Part 5
===========================
- Those code will change the attribute of elements

$(document).ready(function()
{
    $("img").css("border-radius","30%");
});

$(document).ready(function()
{
    $("[title]").css("border-radius","30%");
});

$(document).ready(function()
{
    $("[alt]").css("border-radius","30%");
});

$(document).ready(function()
{
    $("[alt='Image 2']").css("border-radius","30%");
});

$(document).ready(function()
{
    $("[title='Test 3']").css("border-radius","30%");
});

$(document).ready(function()
{
    $("[title='Test 3']").css("border-radius","30%");
    $("[lang]").css("color","#F0F");
});

$(document).ready(function()
{
    $("[title='Test 3']").css("border-radius","30%");
    $("p[lang]").css("color","#F0F");
});

$(document).ready(function()
{
    $("[title='Test 3']").css("border-radius","30%");
    $("div[lang]").css("color","#F0F");
});

$(document).ready(function()
{
    $("[title='Test 3']").css("border-radius","30%");
    $("div[lang!='en']").css("color","#F0F");
});

$(document).ready(function()
{
    $("[title='Test 3']").css("border-radius","30%");
    $("div[lang!='ar']").css("color","#F0F");
});

-----------------------------------------------------------

$(document).ready(function()
{
    $("[title], [lang]").fadeOut(2000);
});

$(document).ready(function()
{
    $("img[title='Test 3'], p[lang='ar']").fadeOut(2000);
});

$(document).ready(function()
{
    $("img[title!='Test 3'], 
    p[lang!='ar'], 
    div[lang!='ar']").fadeOut(2000);
});

---------------------------------------------------

$(document).ready(function()
{
    $("img[alt*='My']").css("border-radius","50%"); [ * ]
});

$(document).ready(function()
{
    $("img[title~='Test']").css("border-radius","50%"); [ ~ ]
});

$(document).ready(function()
{
    $("img[title^='Test']").css("border-radius","50%"); [ ^ ] It mean starting with Test
});

$(document).ready(function()
{
    $("img[title^='my']").css("border-radius","50%"); It mean starting with my
});


*/

$(document).ready(function()
{
    $("img[title^='my']").css("border-radius","50%");
});