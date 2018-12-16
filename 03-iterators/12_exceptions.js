function* generatorFunction() {

  try {
    yield 1;
  }
  catch(e) {
    console.log("1st Exception");
  }

  try {
    yield 2;
  }
  catch(e) {
    console.log("2nd Exception");
  }
}

var generator = generatorFunction();

console.log(generator.next().value);
console.log(generator.throw("exception string").value);
console.log(generator.throw("exception string").done);