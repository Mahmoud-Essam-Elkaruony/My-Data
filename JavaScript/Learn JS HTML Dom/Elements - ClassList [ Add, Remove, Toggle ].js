/* Elements - ClassList [ Add, Remove, Toggle ] */


// Toggle With Toggel you can add class And remove class ..
// Like you can show class and hidden class with toggle ..

var myDiv = document.getElementById('ourtext'),

    myButton = document.querySelector('button');

myButton.onclick = function() {

    myDiv.classList.toggle('hidden');
}

/*

[toggle]
// Toggle With Toggel you can add class And remove class ..
// Like you can show class and hidden class with toggle ..

var myDiv = document.getElementById('ourtext'),

    myButton = document.querySelector('button');

myButton.onclick = function() {

    myDiv.classList.toggle('hidden');

...............................................
[Remove]
// You can remove one class or as you want
var myDiv = document.getElementById('main'),

    myButton = document.querySelector('button');

myButton.onclick = function() {

    myDiv.classList.remove('cool', 'zero');
};
...................................
[Add]

var myDiv = document.getElementById('main'),

    myButton = document.querySelector('button');

myButton.onclick = function() {

    myDiv.classList.add('js', 'css', 'html');
};

...................................................
// This is normal way to more class I write it but do not use it use above
var myDiv = document.getElementById('main'),

    myButton = document.querySelector('button');

myButton.onclick = function() {

    'use strict'

    myDiv.className = 'TITO';
};

....................................................

// This is normal way to more class

myDiv.className += 'Test';

*/




























