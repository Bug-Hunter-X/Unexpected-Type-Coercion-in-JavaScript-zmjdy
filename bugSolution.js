function foo(a, b) {
  //Explicit type checking and conversion
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

function bar() {
  let x = foo(1, 2);
  console.log(x); // Output: 3
}

bar();