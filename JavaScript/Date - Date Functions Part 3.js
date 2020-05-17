/* Date - Date Functions Part 3*/


/*
    now()

    Parse()

    toISOString()

    toDateString()

    toTimeString()

*/


var theDate = new Date(),

    myIso = theDate.toTimeString();

   
console.log(myIso);




/*


.....................................................
var theDate = new Date(),

    myIso = theDate.toDateString()

   
console.log(myIso);


.........................................
var theDate = new Date(),

    myIso = theDate.toISOString();

   
console.log(myIso);
....................................................................
var theDate = new Date(),

    myDate = Date.parse("1 June 1987 12:33:40"), // Start from 1970 To 1987

    min = 1000 * 60,

    hour = min * 60,

    day = hour * 24,

    month = day * 30,

    year = month * 12;


console.log(Math.round(myDate / year));
console.log(myDate);
..................................................

var theDate = new Date(),

    now = Date.now(), 

    min = 1000 * 60,

    hour = min * 60,

    da = hour * 24,

    week = da * 7,

    mon = week * 30,

    year = mon * 12;


console.log(Math.round(now / year));

*/




















