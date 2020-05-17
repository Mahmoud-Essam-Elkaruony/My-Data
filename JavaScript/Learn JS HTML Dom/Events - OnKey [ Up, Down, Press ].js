/* Events - OnKey [ Up, Down, Press ] */

var myForm = document.getElementById('main'),

    myInput = document.getElementById('input'),

    myNotice = document.querySelector('div');

myInput.onkeyup = function() {

    'use strict';

    myNotice.textContent = this.value;
};


/*

*/




































