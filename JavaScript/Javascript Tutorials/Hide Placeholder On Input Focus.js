/*  Hide Placeholder On Input Focus */



var myInput = document.getElementById('my-input');

myInput.onfocus = function() {
 
  'use strict';

  // Store placeholder attribute in backup attribute 

  this.setAttribute('deta-place', this.getAttribute('placeholder'));

  // Empty placeholder attribute

  this.setAttribute('placeholder', '');
  
};

myInput.onblur = function() {

  'use strict';

  // get placeholder attribute in backup attribute

  this.setAttribute('placeholder', this.getAttribute('deta-place'));

};



/*
// Another way but i copy this code
var myInput = document.getElementById('demo');

var place = myInput.placeholder;

myInput.onfocus = function () {
	'use strict';
	myInput.placeholder = '';
};

myInput.onblur = function () {
	'use strict';
	myInput.placeholder = place;
};

*/