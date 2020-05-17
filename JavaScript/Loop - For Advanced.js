/* Loop - For Advanced */

/*

// This Is Advance loop  
var i = 1;

for (;;) {   // This is like This  For (i = 1; i < 20; i++)

    if (i > 20) break; {

        console.log(i);

        i++
    }
}

*/

/* 

function generateYears(Start, End) {

    "use strict";

    document.write("<select>");

    var years;

    for (years = Start; years <= End; years++) {

        document.write("<option value=\"" + years + "\">" + years + "<option/>");
    }


    document.write("<select/>");
}
generateYears(2000, 2019);
generateYears(1980, 2019);

*/


var getYareOne = document.getElementById("inpu1"),

    getYearTow = document.getElementById("inpu2"),

    bttu = document.getElementById("Btt");


bttu.onclick = function craeteYaer() {

    "use strict";

    document.write("<select>");

    var start;

    for (start = getYareOne; start <= getYearTow; start++) {
        
        document.write("<option>" + start + "<option/>");
    }

    document.write("<select/>");
}

























