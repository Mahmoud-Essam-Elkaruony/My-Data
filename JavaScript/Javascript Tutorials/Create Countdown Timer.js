/* Create Countdown Timer */


var seconds = 119, // Number of seconds = 30 Minuts

   countDiv = document.getElementById('countdown'),

   secondPass,

   countDown = setInterval(function() { // This function will decrease 1000 millseconds of secondPass()

      'use strict';

      secondPass();

   }, 1000);


function secondPass() {

   'use strict';

   var minutes = Math.floor(seconds / 60), // 1

      remSeconds =  seconds  % 60; // 59 because of 119 = 1 : 59 minutes

      if (remSeconds < 10) {

         remSeconds = '0' + remSeconds;
      }

      countDiv.innerHTML = minutes + ':' + remSeconds; 

      if (seconds > 0) {

         seconds = seconds - 1; // Decrease one seconds every 1000 millseconds

      }else {

         clearInterval(countDown); // Stop countdown timer
         countDiv.innerHTML = 'Done';
         countDiv.style.color = "red";
      }

};






















