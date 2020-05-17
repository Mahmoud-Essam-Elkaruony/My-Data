/*  Elements - HasAttribute, RemoveAttribute */


var myImage = document.querySelector('img');


// If Attribute empty remove it 

if (myImage.hasAttribute('alt')) {

    if (myImage.alt === '') {

        myImage.removeAttribute('alt');

    } else {

        console.log('No, This Element Dose Not Hsa Attribute Alt')
    };

} 





/*


....................................
// hasAttribute
var myImage = document.querySelector('img');

if (myImage.hasAttribute('alt')) {

    if (myImage.alt === '') {

        myImage.setAttribute('alt', 'Default Alternate Text');

    } else {

        console.log('No, This Element Dose Not Hsa Attribute Alt')
    };

} 

..............................
var myImage = document.querySelector('img');

if (myImage.hasAttribute('alt')) {

    console.log('Yse, This Element Has Attribut Alt');

} else {

    console.log('No, This Element Dose Not Hsa Attribute Alt');
}

*/
































