//Create your greeting function here.

function greeting(name) {
  function greet() {
    return "Good Morning " + name;
  }
  return greet;
}

var saying = greeting('Anisha');
saying(); // returns Good Morning Anisha
