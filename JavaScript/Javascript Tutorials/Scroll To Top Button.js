/* Scroll To Top Button */

var myButton = document.getElementById('up');


window.onscroll = function() {

  'use strict';

    if (window.pageYOffset >= 800) {

        myButton.style.display = 'block';

    }else {

       myButton.style.display = 'none';
    }
};

myButton.onclick = function() {

  'use strict';

  window.scrollTo(0, 0) // This function take Y + X

};











