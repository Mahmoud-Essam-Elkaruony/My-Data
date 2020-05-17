/* Create Simple Dynamic Clock */


function showTime() {

  'use strict';

  var toDay = new Date(),

    hours = toDay.getHours(),

    seconds = toDay.getSeconds(),

    minutes = toDay.getMinutes();

   if (hours < 10) { // Those if it dose not work i do not know why but i will know so soon..

      hours = '0' + hours;
   };

   if (minutes < 10) { 

     minutes = '0' + minutes;
   };

   if (seconds < 10 ) { 

    seconds = '0' + seconds;
   };

  document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds;

};

window.onload = function() {

  'use strict';

  setInterval(showTime, 500);
};
























