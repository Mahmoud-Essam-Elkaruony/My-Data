/*  Calculate Textarea Characters Like Twitter */

var myTextarea = document.getElementById('my-text'),

    mySpan = document.getElementById('my-span');

myTextarea.oninput = function() { 

    'use strict';

    mySpan.textContent = 50 - this.value.length; // this it mean myTextarea it work with it as object

    if (mySpan.textContent < 0) {

       mySpan.style.color = '#F00';

    }else {

       mySpan.style.color = '#000';

    };

};

// This is shothand ==> [if]

// ? it mean [And]

// mySpan.textContent < 0 ? mySpan.style.color = '#F00'; : mySpan.style.color = '#000';




