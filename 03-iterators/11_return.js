function* generator_function() {
  yield 1;
  yield 2;
  yield 3;
}

var generator = generator_function();

console.log(generator.next().value);
console.log(generator.return(22).value);
console.log(generator.next().done);