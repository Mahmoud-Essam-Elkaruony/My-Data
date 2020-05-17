/* Elements - Children - Append Child */


var myMainDiv = document.getElementById('main'),

    // Creat Div Element

    myNewElement = document.createElement('div'),

    // Create Another Paragraph 

    myNewP = document.createElement('p'),

    // Create Text Node

    myText = document.createTextNode('Hello From JavaScript');

// Append Text To The New Element

myNewElement.appendChild(myText);

// Append The New Element To My Main Div

myMainDiv.appendChild(myNewElement);

// Append The New Paragraph To My Main Div

myMainDiv.appendChild(myNewP);



/*
var myMainDiv = document.getElementById('main'),

    myNewElement = document.createElement('div');

myMainDiv.appendChild(myNewElement);
*/

























