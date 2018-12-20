var obj = {}
Reflect.defineProperty(obj, "name", {
  value: "Davide",
  writable: true,
  configurable: true,
  enumerable: true
});

console.log(obj.name); //Output "Davide"