/* Loop - Control */


var i, x;

MianLoop: // This Is label  We  Use This For Put Name For Loop

for (i = 1; i < 5; i++) {

    ChildLoop:

    for (x = 15; x < 20; x++) {

        if (x === 17) {

            continue MianLoop; // This Code Will Runing like This 
                               // 1 => 15 1 => 16 / 2 => 15 2 => 16 / 3 => 15 3 => 16
                                
        }                   

        console.log(i + " => " + x);
    }
}


/*
.............................................................
//  label 
var i, x;

MianLoop: // This Is label  We  Use This For Put Name For Loop

for (i = 1; i < 5; i++) {

    ChildLoop:

    for (x = 15; x < 20; x++) {

        if (x === 17) {

            break ChildLoop // We Use This label To Definition What Loop Will Break Or Contiune
                            // It Is Important Definition What Will Break or contiune.
        }                   // Code Will Ruing Like That 1 => 16 1 => 17 / 2 => 16 2 => 17 ...

        console.log(i + " => " + x);
    }
}
......................................................

// Continue
var i;

for (i = 1; i < 10; i++) {

    if (i === 4) {

        continue; // Continue Runing Code Without The Condition In (If)
                  // Code Will Runing Like This 1 2 3 5 6 7 8 9
    }

    console.log(i);
}

//////////////////////////////////////

// Break
var i;

for (i = 1; i < 10; i++) {

    if (i === 4) {

        break; // Break Stop Loop When Condition Is True
    }

    console.log(i);
}

*/











































