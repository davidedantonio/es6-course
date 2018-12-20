var obj = {
  __proto__: {
    name: "Davide"
  },
  age: 12
};

console.log(Reflect.has(obj, "name")); //Output "true"
console.log(Reflect.has(obj, "age")); //Output "true"