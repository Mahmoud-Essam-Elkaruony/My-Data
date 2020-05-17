/*  Events Part 3 - onmouseover, onmouseout, onchange */

/*

var myDiv = document.getElementById("div");

myDiv.onmouseover = function () {

     myDiv.innerHTML = "You Hovered On Me";
};

var myDiv = document.getElementById("div");

myDiv.onmouseout = function () {

     myDiv.innerHTML = "You Have Gone";
};


*/

var 
     myInput = document.getElementById("input"),

     myDiv = document.getElementById("div"),

     myCurrency =document.getElementById("currency");


myCurrency.onchange = function () {

     myDiv.innerHTML = " Worth " + myInput.value * myCurrency.value + " Egyption Pound";
};



























