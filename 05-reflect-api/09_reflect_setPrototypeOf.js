var obj = {};
Reflect.setPrototypeOf(obj, {
  name: "Davide"
});

console.log(obj.name); //Output "Davide"