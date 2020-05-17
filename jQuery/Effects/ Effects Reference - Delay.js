/*global $, jQuery, alert*/

/*
Effects Reference - Delay
=======================

$(function() {

    "use strict";

    $('button').click(function(){

        $('span').text("Hello message from jQuery").fadeIn(1000)
                                                    .delay(5000)
                                                    .fadeOut(1000);
                                                    
    });
});


*/


$(function() {

    "use strict";

    $("button").click(function(){

        $("div.first").slideUp(3000).delay(5000).fadeIn(4000);
        $("div.second").slideUp(3000).fadeIn(4000)
    });
});



/*

<style>
div {
position: absolute;
width: 60px;
height: 60px;
float: left;
}
.first {
background-color: #3f3;
left: 0;
}
.second {
background-color: #33f;
left: 80px;
}
</style>

<body>
​
<p><button>Run</button></p>
<div class="first"></div>
<div class="second"></div>
​
<script>
$( "button" ).click(function() {
$( "div.first" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
$( "div.second" ).slideUp( 300 ).fadeIn( 400 );
});
</script>


*/