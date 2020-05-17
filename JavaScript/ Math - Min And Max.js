/* Math - Min Max */

/*
    Syntax: Math.min(Val, Val, Val, Val, Val, Val);
*/

var x = Math.max(100, 10, 50, 1000.50,
                 -90, -120, -100.50, 
                 150.10); // Max Choose Larger Of Number ==> 1000

console.log(Math.ceil(Math.round(x) + 10.5)); // ==> 1011

/*

........................................................
var x = Math.max(100, 10, 50, 1000.50,
                 -90, -120, -100.50, 
                 150.10); // Max Choose Larger Of Number ==> 1000

console.log(Math.round(x) + 10); // ==> 1011
...........................................................
var x = Math.max(100, 10, 50, 1000.50,
                 -90, -120, -100.50, 
                 150.10); // Max Choose Larger Of Number ==> 1000

console.log(Math.round(x)); //1000.20 => 1000 / 1000.40 => 1000/ 1000.50 => 10001 
                            // 1000.60 => 10001

.........................................................
var x = Math.max(100, 10, 50, 1000.20,
                 -90, -120, -100.50, 
                 150.10); // Max Choose Larger Of Number ==> 1000

console.log(Math.ceil(x)); // 10001
........................................................
var x = Math.max(100, 10, 50, 1000.20,
                 -90, -120, -100.50, 
                 150.10); // Max Choose Larger Of Number ==> 1000

console.log(Math.floor(x)); // 1000
.................................................................
// Max 
var x = Math.max(100, 10, 50, 1000,
                 -90, -120, -100.50, 
                 150.10); // Max Choose Larger Of Number ==> 1000

console.log(x);
.....................................................
// Min
var x = Math.min(100, 10, 50, 1000,
                 -90, -120, -100.50, 
                 150.10); // Min Choose Less Of Number ==> -120

console.log(x);
*/




















