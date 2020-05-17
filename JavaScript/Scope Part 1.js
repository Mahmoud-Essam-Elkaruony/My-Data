/* Scope Part 1 */
 

var x = 1  // Global Scope 


function changeXto2() {

     x = 2;  // Global Scope 
}

function changexto3() {

     var x = 3;   // Local Scope
    
}

console.log(x); // Global Scope 

changeXto2(); // Global Scope 

console.log(x); // Global Scope 

changexto3(); // Local Scope

console.log(x); // Global Scope 




































