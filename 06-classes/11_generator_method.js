class myClass {
  * generator_function() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }
}

var obj = new myClass();
let generator = obj.generator_function();

console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
console.log(generator.next().value); // 4
console.log(generator.next().value); // 5
console.log(generator.next().done); // true
console.log("generator_function" in myClass.prototype); // true