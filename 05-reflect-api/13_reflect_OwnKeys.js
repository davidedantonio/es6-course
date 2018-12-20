var obj = {
  a: 1,
  b: 2,
  __proto__: {
    c: 3
  }
};

var keys = Reflect.ownKeys(obj);
console.log(keys.length); //Output "2"
console.log(keys[0]); //Output "a"
console.log(keys[1]); //Output "b"