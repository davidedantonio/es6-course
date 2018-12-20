var object1 = {
  name: "Davide",
  __proto__: {age: 35}
}

var object2 = {name: "Davide"}
Object.setPrototypeOf(object2, {age: 35});

var object3 = Object.create({age: 35}, {name: {value: "Davide"}});

console.log(object1.name + " " + object1.age); // Output "Davide 35"
console.log(object2.name + " " + object2.age); // Output "Davide 35"
console.log(object3.name + " " + object3.age); // Output "Davide 35"