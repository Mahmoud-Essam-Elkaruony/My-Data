/* Math - Random */

/*
    Syntax: Math.random();
*/

// Do Not Forget Math.random() Start from 0.3937861730005747 Or Anything
// x == Math.random() == > Start from Zero 0.3937861730005747
// x * 10 = 0.3937861730005747 + 1 = 1.3937861730005747 
//  When We Use ceil To Keep The Number Between 1 To 11 
// It Will Print Out number From 1 To 11 just 
// If We Do Not Need (0) 
// Because Of Ceil Put The Number To the nearest Number At the  Top

var x = Math.random(),

    myEndPattern = 10;
                                          
console.log(Math.ceil((x * myEndPattern))+ 1 ); // pritn number from 1 to 11 
                                        

/*



// x == Math.random() == > Start from Zero 
// x * 10 = 0 + 1 = 1 
//  When We Use Floor Keep The Number 10
// It Will Print Out number From 1 To 10 just 
// If We Do Not Need (0) 
//Because Of floor Put The Number To the nearest Number At the floor
var x = Math.random();
                                          
console.log(Math.floor((x * 10) + 1 )); 
                
..................................
var x = Math.random();

console.log(Math.floor(x * 20)); x == 0
.........................................
var x = Math.random();

console.log(x);
*/































