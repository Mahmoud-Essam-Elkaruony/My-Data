/*  Find Elements By Objects Part 2 */

/* Find Elenemts By Objects Collection */


/*
    1-- document.body 
    .. You can get any Element with this way ..

    2-- document.anchors
    .. anchors is not line this is tag [a] .. 

    3-- document.links

*/



// Whis This code if you want to see how much number of links
var myDiv = document.getElementById('show');

myDiv.innerText = document.links.length;






/*
[3]
// Whis This code if you want to see how much number of links
var myDiv = document.getElementById('show');

myDiv.innerText = document.links.length;

..........................................................
[2]
// Whis This code if you want to see how much number of anchors
var myDiv = document.getElementById('show');

myDiv.innerText = document.anchors.length;


.........................................
[1]
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var myDiv = document.getElementById('show');

myDiv.innerText = document.body.innerText;

if (document.body.innerHTML.indexOf('XZoX') > -1 ) {

    console.log('Yes, This String is Exist');


} else {


    console.log('No, This String Is Not Exist ');
}

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// With this code you will see Just text 

var myDiv = document.getElementById('show');

myDiv.innerText = document.body.innerText;
>>>>>>>>>>>>>>>>>>>

// With this code you will see all everything in HTML Page

var myDiv = document.getElementById('show');

myDiv.innerText = document.body.innerHTML;

*/



























