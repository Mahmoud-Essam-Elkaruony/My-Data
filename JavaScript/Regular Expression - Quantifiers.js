/*  Regular Expression - Quantifiers */

/*
    Quantifiers 

    Letter+ => Word Contian One Letter
    "I Love Elzeereo Web School" => I Lov& &lz&r&o W&b School

    Letter{Number} => Word Contian Number Of Letter
    "I Love Elzeereo Web School" => I Lov& &lz&r&o W&b School

    letter{Number,Number} => Word contian Number Or Number
    "I Love Elzeereo Weeeb School", => I Love Elz&reo W&b School

    Letter{Number, ....} => Word Contian At Least Number
    "Ie Love Elzeero Weeeb Schooeeeel" => Ie Love Elz&ro W&b Schoo&l


*/


var string = "Ie Love Elzeero Weeeb Schooeeeel",

    result = string.replace(/e{2,}/gi, "&"); // [ , ] => Here mean Or

console.log(result);



/*
...............................................
// Letter{Number,Number}
var string = "I Love Elzeereo Weeeb School",

    result = string.replace(/e{2,3}/gi, "&"); // [ , ] => Here mean Or

console.log(result);

.........................................
// Letter{Number}
var string = "I Love Elzeeereo Web School",

    result = string.replace(/e{3}/gi, "&");

console.log(result);
...........................................
// Letter+
var string = "I Love Elzeereo Web School",

    result = string.replace(/e+/gi, "&");

console.log(result);

*/





























