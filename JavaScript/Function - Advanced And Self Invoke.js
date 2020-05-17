/*  Function - Advanced And Self Invoke */

function convertUseToRiyal(){

     var amount = document.getElementById("dollar").value,

        result = amount * 3.75,

        message = document.getElementById("message");

     if (amount === "") { // Amount Can't Be Empty

          message.innerHTML = "This Field Can't Be Empty"; 

     } else if (isNaN(amount)) { // Amount Must Be Number 
          
          message.innerHTML = "This Field Accept Nubers Only";

     } else if (amount === "0") { // Amount Can't Be 0

          message.innerHTML = "The Value Must Not Be 0";

     } else if (amount < 0) { // Amount can't Be Negative Number

          message.innerHTML = "The Value Must Not Be Negative Number";

     } else if (amount > 10000) { // Amount Can't Be Largest Then 10000

          message.innerHTML = "The Number Can't Be Largest Then 10000";

     } else {

          message.innerHTML = amount + " Dollar Is Worth " + result + " Riyal ";
     }

}


/*
// This Is How To Make Self Invoke For This Functio 

(function convertUseToRiyal(){

     var amount = document.getElementById("price").innerHTML;

     alert(amount * 3.75);
}());
*/






































