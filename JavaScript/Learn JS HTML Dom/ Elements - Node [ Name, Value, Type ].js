/* Elements - Node [ Name, Value, Type ] */

/*
    Nodes Type will Return number 

    3 it mean it is [Text]
    1 it mean it is [element]
    2 it mean it is [attribute]
    8 it mean it is [comment]

*/



var myMainDiv = document.getElementById('main');

// This function print to me 3 because of the div contain text it mean => 3
// If the Div contain comment it will print => 8
console.log(myMainDiv.childNodes[3].childNodes[0].nodeType); // Print [3]




/*

....................................................
#Value
    myMainDiv = The Main parent Div
    childNodes[3] = <div>This Our HTML DIV</div>
    childNodes[0] = First child of <div>This Our HTML DIV</div>



var myMainDiv = document.getElementById('main');

console.log(myMainDiv.childNodes[3].childNodes[0]); 
console.log(myMainDiv.childNodes[3]);


......................................................

#Value  
var myMainDiv = document.getElementById('main');

console.log(myMainDiv.childNodes[3].firstChild.nodeValue); // Print => This Our HTML DIV
>>>>>>...
This function will print the Value of element 

var myMainDiv = document.getElementById('main');

console.log(myMainDiv.childNodes[2].nodeValue); // Print Value Of element => [Second Text]
......................................................
# Tag this function will print the Tag of the element  
var myMainDiv = document.getElementById('main');

console.log(myMainDiv.childNodes[5].tagName); // Print element Tag [<P>]

...................................................
# Name this function will print node name And you can choose any Nodes you need..
var myMainDiv = document.getElementById('main');

console.log(myMainDiv.childNodes[0].nodeName); // Print [Text]
*/





































