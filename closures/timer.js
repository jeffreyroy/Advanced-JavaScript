window.onload = function() {

  // ====== DON'T DELETE / DON'T CHANGE ====
  timer(10, "happy new year");
  // ---------------------------------------

};

function timer(time, greeting){
  var i = time
    var countDown = setInterval(function() {
      console.log(i);
      i --;
      if(i == 0) {
        console.log(greeting);
        clearInterval(countDown);
      }
    }, 1000);
}

