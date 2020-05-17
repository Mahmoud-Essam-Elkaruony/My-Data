/* Elements - Children - Insert Before */


var myMainDiv = document.getElementById('main'),

    // Creat Div Element

    myNewDiv = document.createElement('div'),

    // Create Text Node

    myText = document.createTextNode('Hello From JavaScript');

// Append Text To The New Element

myNewDiv.appendChild(myText);

// You can insert your function as you want with this function

myMainDiv.insertBefore(myNewDiv, myMainDiv.childNodes[3]);

console.log(myMainDiv.childNodes);





/*

......................................................
var myMainDiv = document.getElementById('main'),

    // Creat Div Element

    myNewDiv = document.createElement('div'),

    // Create Text Node

    myText = document.createTextNode('Hello From JavaScript');

// Append Text To The New Element

myNewDiv.appendChild(myText);

// This function will input the myNewDiv first of elemet of the MyMainDiv

myMainDiv.insertBefore(myNewDiv, myMainDiv.firstElementChild);
*/

























