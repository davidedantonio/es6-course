function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

let generator = generatorFunction();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().done);

generator = generatorFunction();
let iterable = generator[Symbol.iterator]();

console.log(iterable.next().value);
console.log(iterable.next().value);
console.log(iterable.next().value);
console.log(iterable.next().value);
console.log(iterable.next().value);
console.log(iterable.next().done);