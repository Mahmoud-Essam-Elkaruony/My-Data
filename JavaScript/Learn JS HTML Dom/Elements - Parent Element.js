/* Elements - Parent Element */

/*
    what is the difference between ParentNode And parentElement

    parentNode =  can return null Because of it work with all page it mean 
    maybe [ Text or comment or element or anything ]

    parentElement = Just work with Element..

*/


var myMainDiv = document.getElementById('main'),

    myButton = myMainDiv.firstElementChild;

myButton.onclick = function() {

    'use strict';

    this.parentElement.style.display = 'None';
};

console.log(myMainDiv.parentElement.tagName); 

if (myMainDiv.parentElement.tagName === 'BODY') {

    console.log('This Element Has Not Have Parent Only Body');
}



/*

var myMainDiv = document.getElementById('main'),

    myButton = myMainDiv.firstElementChild;

myButton.onclick = function() {

    'use strict';

    this.parentElement.style.display = 'None';
};

// If you need to cheek out what is the parent of element

console.log(myMainDiv.parentElement.tagName); // Print BODY
..............................................................

var myMainDiv = document.getElementById('main'),

    myButton = myMainDiv.firstElementChild;

// If You need to know what is parent of button
console.log(myButton.parentNode);
*/























