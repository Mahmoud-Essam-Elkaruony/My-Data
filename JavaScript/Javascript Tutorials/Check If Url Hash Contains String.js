/* Check If Url Hash Contains String */

// In thie lesson you shuold write #Mahmoud in URL in Page like this into work code  
//file:///E:/Mahmoud/Elzero%20Web%20School/Javascript%20%20Tutorials/index.html#Mahmoud


if (window.location.hash) {

   var hash = window.location.hash.substring(1);

   if (hash === 'Mahmoud') {

      console.log('Good Mahmoud Hash is found');
   }

}else {

   console.log('Bad there is no hash in link');
};







/*


................................

// Method 2
if (window.location.hash) {

   var Hash = window.location.hash.substring(1) // substring cut piece of string nad return the rest ...
                                                // As you know you can use with substring number from 0 to any number  
   console.log(Hash);

}else {

   console.log('Bad there is no hash in link');
};

...........................

// Method  1 
if (window.location.hash) {

   if (window.location.hash.indexOf('Mahmoud') === 1) { // 0 === #

      console.log('Good Mahmoud is founed');
   } 


}else {

   console.log('Bad there is no hash in link');
}

*/

















