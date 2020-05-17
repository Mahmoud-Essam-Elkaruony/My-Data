/*  Events - Onfocus, OnBlur, OnSubmit */


var myForm = document.getElementById('main'),

    myNote = document.getElementById('notice'),

    myInput = document.getElementById('input');

myForm.onsubmit = function(e) {

    'use strict';

    e.preventDefault();
};





/*

var myForm = document.getElementById('main'),

    myNote = document.getElementById('notice'),

    myInput = document.getElementById('input');

myInput.onfocus = function() {

    'use strict';

    myNote.textContent = 'Please do not forget to write a strong password';
};

myInput.onblur = function() {

    'use strict';

    myNote.textContent = '';

    if (myInput.valueOf.length < 10) { //  This function is not wright [valueOf]

        myNote.textContent = 'Sorry your password is very lowe';
    }
};

*/



















