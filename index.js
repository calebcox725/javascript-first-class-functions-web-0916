function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function butts() {}
}

function returnsAnAnonymousFunction() {
  return () => {}
}