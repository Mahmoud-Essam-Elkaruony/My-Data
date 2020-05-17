/*  Elements - Click */


var myMainDiv = document.getElementById('main'),

    myButton = myMainDiv.firstElementChild;


// This function will remove the div when click on button
myButton.onclick = function () {

    'use strict';

    this.parentElement.style.display = 'none';
};

// This function will remove the div after 3000.m.s
window.onload = function () {
    'use strict';

    setTimeout(function () {

        myButton.onclick();

    }, 3000);
    
}


/*



....
// This function will remove the div automatically when page load.
// It mean when the window load click on the button automatically..
window.onload = function () {
    'use strict';

    myButton.click();
}
......................................................
var myMainDiv = document.getElementById('main'),

    myButton = myMainDiv.firstElementChild;


// This function will remove the div when click on button
myButton.onclick = function () {

    'use strict';

    this.parentElement.style.display = 'none';
};

*/



























