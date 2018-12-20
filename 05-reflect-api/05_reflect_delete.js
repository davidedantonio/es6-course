var obj = {
  name: "Davide"
}

console.log(obj.name); //Output "Davide"

Reflect.deleteProperty(obj, "name");
console.log(obj.name); //Output "undefined"