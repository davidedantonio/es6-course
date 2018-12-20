var obj = {
  name: "Davide"
};

console.log(Reflect.isExtensible(obj)); //Output "true"
Object.preventExtensions(obj);
console.log(Reflect.isExtensible(obj)); //Output "false"