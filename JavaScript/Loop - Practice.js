/* Loop - Practice */


var i, x;

MianLoop:

for (i = 0; i <= 5; i++) {

    ChildLoop:

    for (x = 10; x <= 14; x++) {

        if (x === 13) {

            continue ChildLoop;
        }
        console.log(i + " => " + x);
    }
}



/*

..........................................
var i, x;

MianLoop:

for (i = 0; i <= 5; i++) {

    ChildLoop:

    for (x = 10; x <= 14; x++) {

        if (x === 13) {

            break MianLoop;
        }
        console.log(i + " => " + x);
    }
}
.............................................

// Do While
var e = 50;

do {

    console.log(e);

    e--
    
} while (e >= 1);

...........................................
// While
var i = 0;
while (i <= 10) {

    console.log(i);

    i++
}

..........................................................
var myCar ={

    Name: "TOYOTA",
    color: "Rad",
    type: "Saden"
};

var print;

for (print in myCar) {

    if (myCar.hasOwnProperty(print)) { // This Code For If This object has
                                       // The Same Property Print   
        console.log(myCar[print]);

    }
    
}
..........................................................

// For In 
var myCar ={

    Name: "TOYOTA",
    color: "Rad",
    type: "Saden"
};

var print;

for (print in myCar) {

    console.log(myCar[print]);
}
console.log(myCar.Name);

............................................................

// This Is Advanced For Loop
var i = 0;

for (;;) {

    if (i > 10) {

        break;
    }

    console.log(i);

    i++
}
......................................
// For 
var i;

for (i = 0; i < 10; i++) {

    console.log(i);
};
*/




































