/*  Elements - Scroll [ Top, Left ] */


/* 
        document.body.scrollTop Thois function is deprecated

        This is new  document.documentElement.scrollTop

        This Code did not work with me because of the lesson
        Has a lot of function deprecated
        This lesson just to there are function work like that 



*/

var myMainDiv = document.getElementById('main');

myMainDiv.onclick = function () {

        'use strict';

        document.documentElement.scrollTop += 100;

        console.log(document.documentElement.scrollTop);

        if (document.documentElementscrollTop >= 1000) {

                this.classList.add('active')
        };
};






/*

        document.documentElement.scrollTop += 100;

        document.documentElement.scrollLeft += 100;


*/





























