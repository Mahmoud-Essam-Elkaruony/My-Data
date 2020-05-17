/*  Document - Create [ Element, Text, Comment ] */

// create the main element 

var myElement = document.createElement('div');

// Append to the body

document.body.appendChild(myElement);

// Create text node 

var myText = document.createTextNode('This div created with JavaScript');

// Create Start  comment

var myStartComment = document.createComment('Start comment created by JavaScript ');

// Create end comment 

var myEndComment = document.createComment('End Comment');


// Add the comment to my element 

myElement.appendChild(myStartComment);


// Add the text to my element

myElement.appendChild(myText);

// End Comment

myElement.appendChild(myEndComment);


// This Is My Work 
var myP = document.createElement('p');

document.body.appendChild(myP);

myElement.appendChild(myP);

myP.innerHTML = "I'm Verey Heppy With JavaScrip";

var myDiv = document.createElement('div');

document.body.appendChild(myDiv);

var myParagraph = document.createElement('p'),
 
    Ul = document.createElement('ul');
    
    span = document.createElement('span');

myDiv.append(myParagraph);
myDiv.append(Ul);
myDiv.append(span);

span.innerHTML = 'Hello';
myParagraph.innerHTML = 'You Are Gooood';
Ul.innerHTML = 'This Is My Work';

var myList = document.getElementById('List'),

    myLi,

    myText,

    i;

for (i = 0; i < 10; i++) {

        myLi = document.createElement('li');
        myList.append(myLi);
        myText = document.createTextNode("I Love You Mahmoud" + i);
        myLi.append(myText);

};


























