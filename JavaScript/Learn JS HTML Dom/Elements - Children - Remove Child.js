/*  Elements - Children - Remove Child */


var myMainDiv = document.getElementById('main');

myMainDiv.removeChild(myMainDiv.childNodes[5]);

console.log(myMainDiv.childNodes);


/*


..................................................
var myMainDiv = document.getElementById('main');

myMainDiv.removeChild(myMainDiv.childNodes[5]);

/ also you can use ChildNodes for choose any element you need.
var myMainDiv = document.getElementById('main');

myMainDiv.removeChild(myMainDiv.childNodes[1]);
.....................................
/ This function will remove firstChild 
var myMainDiv = document.getElementById('main');

myMainDiv.removeChild(myMainDiv.firstElementChild);
........................................................
/ If you write just removeChild the function will remove the text..
var myMainDiv = document.getElementById('main');

myMainDiv.removeChild(myMainDiv.firstChild);

*/





























