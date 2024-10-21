//Using callback function

function add(x) {
  let i = 0;
  while (x <= 4) {
    i += x;
    x++;
  }

  return i;
}

function compute(callback, x) {
  return "The sum of first four natural number is "+callback(x);
}
console.log(compute(add, 1));
