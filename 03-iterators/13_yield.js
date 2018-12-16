function* generatorFunction1() {
  yield 2;
  yield 3;
}

function* generatorFunction2() {
  yield 1;
  yield* generatorFunction1();
  yield* [4, 5];
}

var generator = generatorFunction2();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().done);