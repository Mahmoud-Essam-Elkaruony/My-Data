/* Show Random Image Every X Seconds */

// This lesson i dane it but there is problem in ==> src of images  

var myElement = document.getElementById('myImg'),

   myImgs = [

      'E:/Mahmoud/Elzero Web School/Javascript  Tutorials/Img/gladiatork[1].jpg',
      'E:/Mahmoud/Elzero Web School/Javascript  Tutorials/Img/I_Love_You.jpg',
      'E:/Mahmoud/Elzero Web School/Javascript  Tutorials/Img/I_Love_You2.jpg',
      'E:/Mahmoud/Elzero Web School/Javascript  Tutorials/Img/I_Miss_You.jpg'
   ];

function changeImages(myElement, myImgs) {

   'use strict';

   setInterval(function() {

      var myRandomNum = Math.floor(Math.random() * myImgs.length);

      console.log(myRandomNum);

      myElement.src = myImgs[myRandomNum];

   },3000);

};

//changeImages(myElement, myImgs);












