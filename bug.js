function foo(a, b) {
  return a + b;
}

function bar() {
  let x = foo(1, '2');
  console.log(x); // Output: '12'
}

bar();