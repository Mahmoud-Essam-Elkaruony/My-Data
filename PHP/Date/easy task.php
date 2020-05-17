<?php

//$afterSixMonth = time() + (180 * 24 * 60 * 60);

//echo 'The day after six month from now : ' . date('l jS \Of F Y h:i:s A', $afterSixMonth ); 

// This code is the same code I had made but with another function [strtotime('7 month')] 

date_default_timezone_set('Africa/cairo');

$new=strtotime('7 month');

echo date('l jS \of F Y H:I:S A',$new);