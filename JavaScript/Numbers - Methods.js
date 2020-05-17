/* Numbers - Methods */



var x = 100,

    a = x.toString();

console.log(a); // print 100 


var e = 200,

    newe = e.toString(),

    ty = typeof(newe);

console.log(newe); // print 100 to "100"

console.log(ty); // Print type of new e is String ...

var y = 10,

    d = y.toExponential();

console.log(d); // Print 1e+1 ==> like  1 * (10) == 10 

var f = 80, 

    w = f.toExponential();

console.log(w); // Print 8e+1 ==> Like 8 * (10) == 80 

var q = 99.56,

    s = q.toFixed(0);



console.log(s); // print 100 because of I tell him Do Not return decimal point
                // Because Of If You Look You Will See This number (99.56)
                // Over half
                


var b = 99.56,

    d = b.toFixed(1);

console.log(d); // print 99.6 Because Of I tell him return decimal point 

 
// This Function Is Important..
// If the Value As a String like this "100px" And you want to transform it from String to number 
// You Should use This Function parseInt(value)
// But if you want To run this function the number should be in the first 
// Like This "100px" or " 30 point"..
// But If the value come like this "skills 80" the function will not run 

var px = "100px",

    g = parseInt(px);

console.log(g); // print 100

// parseInt("80 Years" / 100) == 0.8

























