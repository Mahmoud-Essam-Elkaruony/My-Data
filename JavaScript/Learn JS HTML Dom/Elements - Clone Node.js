/* Elements - Clone Node */

/*
    Clone = It mean => Copy 

    // This function work with boolean 
    // by default it is false it mean take just the node and take the attribute
    // Attribute like [id="mos" and class="mahmoud"]
    myCopy = myMainDiv.firstElementChild.cloneNode(false);

    // If you want to take all child of node you will input True 
    // In The Function like that
    // It will take all Child
    myCopy = myMainDiv.firstElementChild.cloneNode(true)

*/


var myMainDiv = document.getElementById('main'),

    myNewDiv = document.getElementById('new'),

    // Clone The Node And Save It In Variable

    myCopy = myMainDiv.firstElementChild.cloneNode(true);


// Insert This Copy Inside The New Element
myNewDiv.appendChild(myCopy);



/*


var myMainDiv = document.getElementById('main'),

    myNewDiv = document.getElementById('new'),

    // This how take copy of myMainDiv and input it in [myCopy]
    myCopy = myMainDiv.firstElementChild.cloneNode();

myNewDiv.appendChild(myCopy);
...............................................

var myMainDiv = document.getElementById('main'),

    myNewDiv = document.getElementById('new'),

    myCopy = myMainDiv.firstElementChild;

console.log(myCopy);
*/























