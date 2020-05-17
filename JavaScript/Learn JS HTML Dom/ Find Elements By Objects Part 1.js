/* Find Elements By Objects Part 1 */
/* Find Elenemts By Objects Collection */


/*
    1-- document.title
    .. You can get to document by title with this way .. 

    2-- document.images
    .. You can print your images with this way ..

    3-- document.forms
    .. You can get number of forms with this way ..


*/


var myDiv = document.getElementById('show');

myDiv.innerText = document.forms[1].z1.type; 






/*

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var myDiv = document.getElementById('show');

myDiv.innerText = document.forms[1].z1.type; 

>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var myDiv = document.getElementById('show');

myDiv.innerText = document.forms[0].x1.value; 

>>>>>>>>>>>>>
var myDiv = document.getElementById('show');

myDiv.innerText = document.forms.length; // if you want to know how much of forms
.................................................
[2]
var myDiv = document.getElementById('show'),

    i;

for (i = 0; i < document.images.length; i++) {

    document.write(document.images[i].src + '<br>');
}
>>>>>>>>>>>>>>>>>>>>>>>>>>
var myDiv = document.getElementById('show');

myDiv.innerHTML = document.images[0].src; // Here you can get object = images

>>>>>>>>>>>>>>>
var myDiv = document.getElementById('show');

myDiv.innerHTML = document.images.length;
..................................................
[1]
var myDiv = document.getElementById('show');

myDiv.innerHTML = document.title;

*/

















