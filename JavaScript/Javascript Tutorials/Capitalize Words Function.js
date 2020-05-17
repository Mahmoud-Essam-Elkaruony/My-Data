/* Javascript Arabic Tutorials - Capitalize Words Function */

function capitalizeLetters(string) {

    let oldArry = string.split(' '), // Split return the string as Arry 

        newArry = [];

    for (let i = 0; i < oldArry.length; i++ ) {

        newArry.push(oldArry[i].charAt(0).toUpperCase() + oldArry[i].slice(1));
    };

    return newArry.join(' ');
};

console.log(capitalizeLetters('mahmoud esam'));



















