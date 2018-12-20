var obj1 = {
  __proto__: {
    name: "Davide"
  }
};

var obj2 = Reflect.getPrototypeOf(obj1);
console.log(obj2.name); //Output "Davide"