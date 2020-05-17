/*  Document - Create Attribute */


var myElement = document.getElementById('main'),

        // create the attribute 
    myAttr = document.createAttribute('class'),

    // Create another attribute
    mySecondAttr = document.createAttribute('title');

    // Change the Attribute Value
myAttr.value = 'custom';

// Change the Attribute Value

mySecondAttr.value = 'Mahmoud';


// Add this Attribute to element
myElement.setAttributeNode(myAttr);
// Add this Attribute to element
myElement.setAttributeNode(mySecondAttr);


// My Work

var myDiv = document.createElement('div'),

    myComment = document.createComment('This Is My Work'),

    myText = document.createTextNode("Welcome"),

    myP = document.createElement('p');

    myAttrbu = document.createAttribute('id'),


document.body.append(myDiv);

myDiv.append(myComment);

myDiv.append(myText);

myDiv.append(myP);

myP.innerHTML = "Hello Dar Mahmoud";

myAttrbu.value = 'New';

myDiv.setAttributeNode(myAttrbu);


























