var obj = {
  name: "Davide"
};

var descriptor = Reflect.getOwnPropertyDescriptor(obj, "name");
console.log(descriptor.value); // Output Davide
console.log(descriptor.writable); // Output true
console.log(descriptor.enumerable); // Output true
console.log(descriptor.configurable); // Output true