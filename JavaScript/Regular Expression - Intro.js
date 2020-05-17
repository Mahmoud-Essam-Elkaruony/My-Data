/* Regular Expression - Intro */

/*
    Regular Expression Syntax
    /pattern/attributes

    What Will Use Regular Expresstion With:
        Search, Replace, Match, Split, Test

    Atrributse List:
    [ i ] => Case Insensitive.
    [ g ] => Global Search.
    [ m ] => Multi Line Search.
*/


// This Is Replace With Regular Expresstion
// It Will Replace All L 
//Like This => I #ove E#zero Web Schoo#
var string = "I Love Elzero Web School",

    result = string.replace(/L/gi, "#");
                                        
console.log(result);


/*

..................................................
// This Is Replace With Regular Expresstion
// It Will Replace All L 
//Like This => I #ove E#zero Web Schoo#
var string = "I Love Elzero Web School",

    result = string.replace(/L/gi, "#");
                                        
console.log(result);
.................................................
// This Is Replace With Regular Expresstion
// It Will Replace just one 
// Like This => E#zero Web School
// replace
var string = "  Elzero Web School",

    result = string.replace(/L/i, "#");
                                       
console.log(result);

................................................
// This Is Search With Regular Expresstion
// search
var string = "I Love Elzero Web School",

    result = string.search(/L/);

console.log(result);
*/

















