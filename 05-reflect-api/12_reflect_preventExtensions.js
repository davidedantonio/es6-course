var obj = {
  name: "Davide"
};

console.log(Reflect.isExtensible(obj)); //Output "true"
console.log(Reflect.preventExtensions(obj)); //Output "true"
console.log(Reflect.isExtensible(obj)); //Output "false"