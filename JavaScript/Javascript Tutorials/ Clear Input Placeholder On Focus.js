/* Clear Input Placeholder On Focus */


var ourInput = document.getElementById('ourinput');

ourInput.onfocus = function() {

   'use strict';

   if (this.placeholder === 'First Name') {

      this.placeholder = '';
   }

};
ourInput.onblur = function() {

   'use strict';

   if (this.placeholder === '') {

      this.placeholder = 'First Name';
   }
};


// another way 

/*
This error you will see when you use this function 

main.js:45 Uncaught TypeError: Failed to execute 'setAttribute' on 'Element': 2 arguments required, but only 1 present.
    at HTMLInputElement.ourInput.onblur (main.js:45)
ourInput.onblur @ main.js:45


var ourInput = document.getElementById('ourinput');

ourInput.onfocus = function() {

   'use strict';

   this.removeAttribute('placeholder');

};

ourInput.onblur = function() {

   'use strict';

   this.setAttribute('placeholder');
};
*/


