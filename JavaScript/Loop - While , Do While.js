/*  Loop - While , Do While */

/* 
    Syntax While:

    while ( Condition ) {

        Statement
    }

    Syntax Do / While

    do{
        Statement

    } While (condition)

*/

/*
var i = 0;

while (i <= 10 ) {

    console.log(i);

    i++
};
*/

/*

    What is different between While And Do While 

    While ( Look At condition befor Execution The statement )

    But :

    Do While:
            Execution The Statement befor look At The Condition 
            The code will be executed at least once a week even if the condition is not achieved
*/

/*
var e = 5;
do{

    console.log(e);

    e++

}while (e <= 30);
*/
/*
function generateYears(Start, End) {


    "use strict";

    var years = Start;

    document.write("<select>");

    while ( years <= End ) {

        document.write("<option>" + years + "<option/>");

        years++
    }

    document.write("<select/>");
}

generateYears(2000, 2019);
*/

function generateYears(Start, End) {


    "use strict";

    var years = Start;

    document.write("<select>");

    do {

        document.write("<option>" + years + "<option/>");

        years++

    } while ( years <= End )

    document.write("<select/>");
}

generateYears(2010, 2019);









































