/* Date - Date Format */

/*

    1 -- Full Format => ("June 1, 1987 6:30:40")
    2 -- Long Format => ("June 25 1982 3:40:00")
    3 -- Short Format => ("3/21/2019 9:27:35") // Short Date Accepted Year Start Or End
                                               // But You Should  Input Month Befor Day
                                              //  ("21/3/2019 9:27:35"); // This Is Wrong

    4 -- Iso Format => ("YYYY-MM-DD hh:mm:ss TZD")                           


    Js Ignor Commas
    Js Month Insensitive
    [Month Day year] Or [Day Month Year]


*/


var theDate = new Date("1982-10-25 9:29:00 +02:00"); // ("YYYY-MM-DD hh:mm:ss TZD")
                                             
console.log(theDate);























