function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

let arr = [1, 2, 3];

for(let value of generatorFunction()) {
  console.log(value);
}

for(let value of arr) {
  console.log(value);
}