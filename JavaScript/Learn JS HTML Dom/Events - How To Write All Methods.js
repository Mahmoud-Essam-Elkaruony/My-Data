/*  Events - How To Write All Methods */


var myMainDiv = document.getElementById('main');

    button = document.querySelector('button')

function ChangeMe() { // Also  you can use this way...

    'use strict';

    myMainDiv.style.float = 'right';
    myMainDiv.style.background= 'black';
    myMainDiv.style.color = '#FFF';
};

button = document.querySelector('button').onclick = ChangeMe; 


/*

..........................................
// This Is way [3]

var myMainDiv = document.getElementById('main'),

    button = document.querySelector('button');

function ChangeMe() {

    'use strict';

    myMainDiv.style.float = 'right';
    myMainDiv.style.color= 'yellow';
};

button.onclick = ChangeMe;  
......................................................
// This is way [2]

var myMainDiv = document.getElementById('main'),

    button = document.querySelector('button');

button.onclick = function() {

    'use strict';

    myMainDiv.style.width = '300px';
    myMainDiv.style.background = 'red';
    myMainDiv.style.height = '200px';
    myMainDiv.style.color = '#FFF';

};

........................................................
// You can make events with multiple ways this [1]

var myMainDiv = document.getElementById('main');

function changeColour() {

    'use strict';
    myMainDiv.style.background = '#00F';
    myMainDiv.style.color = '#AAA';
};
*/
























