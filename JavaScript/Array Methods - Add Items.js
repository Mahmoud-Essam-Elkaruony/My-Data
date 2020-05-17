/* Array Methods - Add Items  */

/*
     There Is Three Way To Add In Array...

     friends[6] = "Azea";
     ........................
     friends[friends.length] = "Azea";
     ....................................
     friends.push("Medo");
     .........................................
     If you neet to add item in ferst array.
     friends.unshift("Medo");
     ................................................
     If you need to add some item anywhere in arrya And Removes some itmes from the Array.
     Syintx...

     ArrayName.splice(index, How Many, Item1, Item2, Item3)

     friends.splice(3, 4);


*/


var friends = [
     "Amr",
     "Hmade",
     "Hussin",
     "S7S",
     "Mohbe",
     "Mostfe",
     "TITO",
     "Sayed"
];

console.log(friends); 

console.log(friends.length);

friends.splice(3, 0, "Ibrahiom", "TITO");

console.log(friends);














