/* Array Search */

/*
     
     var specialFriends = friends.indexOf("Hmade", 0);




*/


var friends = [
     "Amr",    // 0 Index
     "Hmade",  // 1 Index
     "Hussin", // 2 Index
     "S7S",    // 3 Index
     "Mohbe",  // 4 Index
     "Mostfe", // 5 Index
     "TITO",   // 6 Index
     "Sayed"   // 7 Index
];

// indexOf("Value To Search", Starting Index);
// lastIndexOf("Value To Search", Starting Index);

var specialFriends = friends.lastIndexOf("Mohbe", 3);

console.log(specialFriends);

console.log(friends[specialFriends]);

document.getElementById("all").innerHTML =

     "My Friends Are : " + friends;

document.getElementById("special").innerHTML =

     "My Special Friend Is : " + "<span style='color:#00F'>" + friends[specialFriends] + "</span>";
















