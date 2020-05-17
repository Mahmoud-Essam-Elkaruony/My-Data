/* Elements - Get, Set Element Content */

/*
    innerText ==> Not Standard
    outerText ==> Not Standard

    innerHTML ==> Right Way
    outerHTML ==> Right Way
    textContent ==> Right Way

    Get HTML Content
    Element.innerHTL

    Get Text Content
    Element.textContent

*/


var myDiv = document.getElementById('main'),

    show = myDiv.textContent = 'This Text From <span>Mahmoud<span/>';

console.log(show); 

// This Is output  This Text From <span>Mahmoud<span/>


/*
var myDiv = document.getElementById('main'),

    show = myDiv.textContent = 'This Text From <span>Mahmoud<span/>';

console.log(show); 

// This Is output  This Text From <span>Mahmoud<span/>

.............................................
// With this way you will change the text in HTMl Page 
var myDiv = document.getElementById('main'),

    show = myDiv.innerHTML = 'This is the new <span>Text<span/>';

console.log(show); 

// This Is output  This is the new <span>Text<span/>
.......................................
// textContent;
// With this way you will see Just Text In HTMl Page
// Like That This Is Main Text 
var myDiv = document.getElementById('main'),

    show = myDiv.textContent;

console.log(show); 

// This Is output  This Is Main Text 

..........................................
// innerHTMl;
// With this way you will see all in HTML Page
// Like That  This Is Main <span>Text</span> 
var myDiv = document.getElementById('main'),

    show = myDiv.innerHTML;

console.log(show); 

// This Is output  This Is Main <span>Text</span> 
*/


















