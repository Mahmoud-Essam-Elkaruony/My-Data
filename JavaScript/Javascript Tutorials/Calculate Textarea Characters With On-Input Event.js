/* Calculate Textarea Characters With On-Input Event */


var $count = document.getElementById('count'),
    $textArea = document.getElementById('text'),
    $maxLength = $textArea.getAttribute('maxlength');


$textArea.oninput = function() {

    $count.innerHTML = $maxLength - this.value.length; // This code is completed if you neet to
                                          // Add some colour or anything you can 

  if ($count.innerHTML == 0) {

    $count.classList.add('zero');

  }else{

    $count.classList.remove('zero');
  }
};



















