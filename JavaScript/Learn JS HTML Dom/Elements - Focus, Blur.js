/* Elements - Focus, Blur */

/*
    Focus = Focus on form 

    Blur = Remove The focus on the form 

*/


var myInput = document.getElementById('main');

// This function will foucs on form when the page load ..
window.onload = function () {

    'use strict';

    document.getElementById('myInput').focus();
};

// this function will remove the focus on the form.. 
document.querySelector('button').oncilck = function () {

    'use strict';

    document.getElementById('myInput').blur();
};


/*

................................................

// [foucs]
var myInput = document.getElementById('main');

// This function will foucs on form when the page load ..
window.onload = function () {

    'use strict';

    document.getElementById('myInput').focus();
};

*/




















