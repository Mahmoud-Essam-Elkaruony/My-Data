// Create The Canvas On page 

var myPageCanvas = document.createElement('canvas');

// Assign Id To This Canvas 

myPageCanvas.id = 'c';

// Customize The Canvas 

myPageCanvas.width = 600;
myPageCanvas.height = 100;
myPageCanvas.style.display = 'block';
myPageCanvas.style.margin = '50px auto';

// Add The Canvas To The Page 

document.body.appendChild(myPageCanvas);

// Get Canvas Information 

var myCanvas = document.getElementById('c'),
    
    myContext = myCanvas.getContext('2d');

// Fill And Style Options

myContext.fillStyle = '#F00';
myContext.strokeStyle = '#00F';
myContext.lineWidth = '3';
myContext.font = '60px Arial';

// Add The Text 

myContext.fillText('Elzero Web School', 50, 80);
myContext.strokeText('Elzero Web School', 50, 80);

// Add The Secod Text 

myContext.strokeStyle = '#00fa00';
myContext.lineWidth = 1;
myContext.strokeText('Elzero Web School', 50, 80);











































