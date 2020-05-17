/* Events - OnClick, OnDblClick, OnMousEnter */


var myButton = document.querySelector('button'),

    myNotice = document.getElementById('notice');

myButton.onmouseleave = function() { // This function special with click right in Mous

    'use strict';

    myNotice.textContent = 'You leave the mous';
};


/*

// onmouseleave
var myButton = document.querySelector('button'),

    myNotice = document.getElementById('notice');

myButton.onmouseleave = function() { // This function special with click right in Mous

    'use strict';

    myNotice.textContent = 'You leave the mous';
};
...........................................
// onmouseenter
var myButton = document.querySelector('button'),

    myNotice = document.getElementById('notice');

myButton.onmouseenter = function() { // This function special with click right in Mous

    'use strict';

    myNotice.textContent = 'You hoverd on the button';
};
...........................................
// Window with oncontextmenu
var myButton = document.querySelector('button'),

    myNotice = document.getElementById('notice');

window.oncontextmenu = function(e) { // This function special with click right in Mous

    'use strict';

    e.preventDefault();

    myNotice.textContent = 'You con not use right click here';
};

.......................................
// oncontextmenu 
var myButton = document.querySelector('button'),

    myNotice = document.getElementById('notice');

myButton.oncontextmenu = function(e) { // This function special with click right in Mous

    'use strict';

    e.preventDefault();

    myNotice.textContent = 'You connot use right click here';
};
..........................................................
// ondblclick
var myButton = document.querySelector('button'),

    myNotice = document.getElementById('notice');

myButton.ondblclick = function() {

    'use strict';

    myNotice.textContent = 'You double clicked on the element';
    myNotice.style.background = 'red';
    myNotice.style.width = '300px';
};

................................................
// onclick
var myButton = document.querySelector('button'),

    myNotice = document.getElementById('notice');

myButton.onclick = function() {

    'use strict';

    myNotice.textContent = 'You clicked on the element';
};
*/
























