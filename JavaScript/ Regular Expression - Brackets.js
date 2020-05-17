/*  Regular Expression - Brackets */

/*
    Regular Expression Syntax
    /pattern/attributes

    What Will Use Regular Expresstion With:
        Search, Replace, Match, Split, Test

    Brackets Use:

        "I Love Elzero Web School"

        [...] Character => I Lov$ $lz$ro W$b School 
        [^...] Not Character => $$$$$e$E$$e$$$$e$$$$$$$$
        [a-e] Range Small Letters => I Lov$ $lz$ro W$$ S$hool Or [a-z] => $ $$$$ $$$$$$ $$$ $$$$$$
        [A-Z] Range Capital Letters 
        [0-9] Range Numbers => "I 1 Love 2 Elzero 3  Web 5 School 6" => I $ Love $ Elzero $  Web $ School $
        [^0-9] Not Range => $$1$$$$$$2$$$$$$$$3$$$$$$4$$$$$$$$5$

        ................................................
        "AB XYZ abc hij "
        [A-g] = Range[A-Z] And Range[a-g] => $$ $$$ $$$ hij 
        [0-9a-z] Double Range => $$$$$$$$$ABCDEFGHIJK$$$$$$$$$$$ 
        [0-9A-Z] Double Range => $$$$$$$$$$$$$$$$$$$$abcdefghijk 

*/


var string = "123456789ABCDEFGHIJKabcdefghijk ",

    result = string.replace(/[0-9A-Z]/g, "$");
                                        
console.log(result);


/*
var string = "AB XYZ abc hij ",

    result = string.replace(/[A-g]/g, "$");
                                        
console.log(result);

// This Example For All.
var string = "I Love Elzero Web School",

    result = string.replace(/[e]/gi, "$");
                                        
console.log(result);

*/

















