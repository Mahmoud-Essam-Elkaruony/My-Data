/* Random Class For Body On Refresh */


var classList = ["class-one", "class-two", "class-three", "class-four"],

    randomkey = Math.floor(Math.random() * classList.length);

document.body.setAttribute('class', classList[randomkey]);


































