/* Find Elements By [ ID, Class, Tag ] */

/*
    1-- document.getElementById()
    // [id] is uniquely you can not use it with all attributes
    
    2-- document.getElementsByTagName()
    // getElementsByTagName / You Can get element by Tag Name like [Div, P, h1,...]
    
    3-- document.getElementsByClassName() | Not Compatible With IE 8
    // getElementsByClassName / You can get elements with the seem name of class by this way

    4-- document.querySelectorAll() | Not Compatible With IE 8
    // With this way you can choose anything with any kind Selector like [class, id ]
   

*/

var myElement = document.querySelectorAll('div.test');

myElement[1].innerHTML = 'Changed By JavaScript';
myElement[2].innerHTML = 'Changed By JavaScript';





/*

................................................
// [3]
var myElement = document.getElementsByClassName('test');

myElement[0].innerHTML = 'Changed By JavaScript';
myElement[1].innerHTML = 'Changed By JavaScript';


..........................................................
// [2]
// look here if you need to change anything in attrbutes 
// you have to call with his indax like that[1] or [0] 

myElement.innerHTML = 'Changed By JavaScript'; // Will Not Change

var myElement = document.getElementsByTagName('p');

myElement[0].innerHTML = 'Changed By JavaScript';
myElement[3].innerHTML = 'Changed By JavaScript';
.................
var myElement = document.getElementsByTagName('p');

console.log(myElement.length); // div => output [2]
                              // p => output 4 
...............................................
// [1]
var myDiv = document.getElementById("test");

myDiv.innerHTML = 'Changed By JavaScript';

*/























