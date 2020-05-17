/* Show / Hide Password On Input Field */


var myInput = document.getElementById('my-input'),

    myButton = document.getElementById('my-button');

myButton.onclick = function() {

  'use strict';

  if (this.textContent === 'Show Password') {

    myInput.setAttribute('type', 'text');
    this.textContent = 'Hide password';

  }else {

    myInput.setAttribute('type', 'password');
    this.textContent = 'Show Password';
  }

};
















