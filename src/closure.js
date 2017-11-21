let add = (function() {
  let counter = 0;
  console.log('add() initialization: ' + counter);

  return function() {
    console.log('add() COUNTER: ' + counter);
    return counter += 1;
  };
})();
//add() initialization: 0

var plus = (function () {
    var counter = 0;
    console.log('plus() initialization: ' + counter);
    return function () {
      console.log('plus() COUNTER: ' + counter);
      return counter += 1;
    }
})();
//plus() initialization: 0

debugger;
add();   //add() COUNTER: 0
add();   //add() COUNTER: 1
add();   //add() COUNTER: 2

plus();   //plus() COUNTER: 0
