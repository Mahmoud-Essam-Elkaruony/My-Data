/*  Loop - For In  / While / Do While */

/*
    For/In Loop Syntax

    for ( Value In Object ) {

        // Statement
    }

*/

var myCar ={

    Name: "kaya",
    color: "Black",
    type: "Sedan",
    price: "100,000",
    model: "2019"
}


var prop;

for ( prop in myCar ) {

    console.log(prop + " :" + myCar[prop]);
}


var prop;

for ( prop in myCar ) {

    // You Not Neet To Input This If You Not See Error

    if (myCar.hasOwnProperty(prop))

    console.log(prop + " :" + myCar[prop]);

}


var string = "I Love JavaScript";

var into;

for (into in string) {

    console.log(string[into]);
}


var f;

for (f = 0; f <= 20; f++) {

    console.log(f);
}


// While

var i = 0;

while (i <= 10) {

    console.log(i);

    i++;
}

// Do / While

var s = 30;

do{

    console.log(s);

    s--

}while (s > 0);






















