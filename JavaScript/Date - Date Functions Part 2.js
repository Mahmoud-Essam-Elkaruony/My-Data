/*Date - Date Functions Part 2 */

/*
  Note If You Use [0] With Set You Will Get Previous Month [1-31] Or Day Or Minute Or 
  Secounds Or Millisecounds 

  setDate([day Is Require])

  setMonth(Month[Require], Day[Optional])  

  setFullYear(Year[Require], Month[Optional], Day[optional])

  setHours(Hours[Require], Minutes[Optional], Seconds[Optional]) 

  setMinutes(Minutes[Require], Secounds[Optional], Milliseconds[Optional])

  setSecounds(Secounds[Require], Millisecouds[Optional])

  setMilliseconds(600000)// Minutes

*/

var theDate = new Date();

theDate.setUTCHours(5);

console.log(theDate);



/*
var theDate = new Date();

theDate.setMonth(2); // Month Start From 0 To 11

console.log(theDate);

......................................
var theDate = new Date();

theDate.setMilliseconds(6000000); // Minutes

console.log(theDate);
.................................
var theDate = new Date();

theDate.setHours(10);

console.log(theDate);

..................................................
var theDate = new Date();

    theDate.setFullYear(2020, 0, 1); //Month[Optional], Day[optional]

console.log(theDate);
..........................................
var theDate = new Date();

    theDate.setDate(2);

console.log(theDate);


*/















