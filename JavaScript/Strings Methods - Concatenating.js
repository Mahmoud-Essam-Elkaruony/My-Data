/* Strings Methods - Concatenating */

/*
    String.fromCharCode(Num1, Num2, Num3, Num4, Num5);
    concat(String, String, String, String, String);
*/

var myMessage = "Hello I Love",

    myMessage2 = "PHP And JavaScrip",
    
    myAll = myMessage.concat(" ", myMessage2, " And Python");

// This Is The Same Code But On The other Hand...

var otherWay = "Hello I Love".concat(" ", "PHP And JavaScript", " And Python");

console.log(myAll);

console.log(otherWay);


/*


 // You Can Write Your Name Or Anything With Number 

var myMessage = String.fromCharCode(77, 97, 104, 109, 111, 117, 100);

console.log(myMessage);

*/





























