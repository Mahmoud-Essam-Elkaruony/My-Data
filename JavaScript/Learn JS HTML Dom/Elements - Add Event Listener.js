/* Elements - Add Event Listener */


var myMainButton = document.getElementById('main'),

    myPower = document.getElementById('power');


myMainButton.onclick = function () {

    'use strict';

    document.getElementById('monsters1').style.display = 'none';

};

myPower.onclick = function () {

    'use strict';
    myMainButton.addEventListener('click', function () {

        document.getElementById('monsters2').style.display = 'none';
    });

};




/*


var myMainButton = document.getElementById('main'),

    myPower = document.getElementById('power');


myMainButton.onclick = function () {

    'use strict';

    document.getElementById('monsters1').style.display = 'none';
};

// This will get the myMainButton And pass to it [monsters2]
myPower.onclick = function () {

    'use strict';
    // This function will add event to myMainButton it is ==> cilck 
    myMainButton.addEventListener('click', function () {

        document.getElementById('monsters2').style.display = 'none';
    });

};

*/



























