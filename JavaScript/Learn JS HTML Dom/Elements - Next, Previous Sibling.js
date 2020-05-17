/* Elements - Next, Previous Sibling */


var myMainDiv = document.getElementById('main');

myMainDiv.childNodes[2].previousElementSibling.textContent = 'Chenged';



/*


// [previous]
var myMainDiv = document.getElementById('main');

myMainDiv.childNodes[2].previousElementSibling.textContent = 'Chenged';
.....................................
[Next]
.................
var myMainDiv = document.getElementById('main');

myMainDiv.childNodes[2].nextElementSibling.textContent = 'Chenged';
...........................................................
// Next Element Sibling will choose just element
var myMainDiv = document.getElementById('main');

console.log(myMainDiv.childNodes[1].nextElementSibling);
..................................
// Next Sibling Will choose anything
var myMainDiv = document.getElementById('main');

console.log(myMainDiv.childNodes[1].nextSibling);

*/

























