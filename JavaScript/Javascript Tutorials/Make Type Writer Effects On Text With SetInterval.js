/* Make Type Writer Effects On Text */

var myText = 'Hello from elzeor web school this is type writer effects on text....',
    i = 0,
    myButton = document.getElementById('button');

myButton.onclick = function() {

  'use strict';

  var typeWriter = setInterval(function() {

      document.getElementById('type').textContent += myText[i];

      i = i + 1;

      if (i > myText.length - 1) {

        clearInterval(typeWriter);
      }

  }, 100);

};
  












































