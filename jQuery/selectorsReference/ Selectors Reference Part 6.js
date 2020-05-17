/*
Selectors Reference Part 6
===========================
:input
:text
:password
:file
:image
:submit
:enabled
:disabled
:checked
:Selected
-----------------------------
:input, :text

$(document).ready(function()
{
    $(":input").css("display","block");
    $(":text").click(function()
    {
        $(this).fadeOut();
    })
})

----------------------------------
:password

$(document).ready(function()
{
    $(":input").css("display","block");
    $(":password").click(function()
    {
        $(this).fadeOut();
    })
});

----------------------------
:submit

$(document).ready(function()
{
    $(":input").css("display","block");
    $(":submit").click(function()
    {
        $(this).fadeOut();
    })
});

------------------------------------------
:reset

$(document).ready(function()
{
    $(":input").css("display","block");
    $(":reset").click(function()
    {
        $(this).fadeOut();
    })
});

--------------------------------------
:checkbox

$(document).ready(function()
{
    $(":input").css("display","block");
    $(":checkbox").click(function()
    {
        $(this).fadeOut();
    })
});

-------------------------------------
:radio

$(document).ready(function()
{
    $(":input").css("display","block");
    $(":radio").click(function()
    {
        $(this).fadeOut();
    })
});

---------------------------------------------------
- Another Selectors

$(document).ready(function()
{
    $(":input").css("display","block");
    $("div :text").click(function()
    {
        $(this).fadeOut();
    })
});


$(document).ready(function()
{
    $(":input").css("display","block");
    $(":disabled").fadeOut(3000);

});

$(document).ready(function()
{
    $(":input").css("display","block");
    $(":enabled").fadeOut(3000);

});


$(document).ready(function()
{
    $(":input").css("display","block");
   // $(":checked").fadeOut(3000);

    console.log( $(":selected").val());
});
*/

$(document).ready(function()
{
    $(":input").css("display","block");
   // $(":checked").fadeOut(3000);

    console.log( $(":selected").val());
});