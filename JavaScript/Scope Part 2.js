/* Scope Part 2 */


function testParent() {
     
     var myName = "Mahmoud"; 

     console.log(myName);

     function testChild() {

          console.log(myName);

          function testGrand() {
               
               console.log(myName); 
          }    
     }
}
testParent();



















