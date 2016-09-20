// var counter = {
//   index: 5,
//   get: function() {
//     return index;
//   },
//   set: function(value) {
//     this.index = value;
//   },
//   increment: function() {
//     this.index++;
//   }
// }



var counter = (function() {
  var index = 0;
  return {
    get: function() {
      return index;
    },
    set: function(value) {
      index = value;
    },
    increment: function() {
      index++;
    }

  }

})();

    // ====== DON'T DELETE / DON'T CHANGE ====
    // Driver code, write your IIFE implementation so this code runs.
    counter.get(); // 0
    counter.set( 3 );
    counter.increment(); // 4
    counter.increment(); // 5




    console.log(counter.get());
    counter.increment(); // 6
    console.log(counter.get());



