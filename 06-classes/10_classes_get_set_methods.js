class Programmer {
  constructor(name) {
    this._name_ = name;
  }

  get name() {
    return this._name_;
  }

  set name(name) {
    this._name_ = name;
  }
}

var p = new Programmer("Davide");
console.log(p.name); // Davide
p.name = "Arnaldo";
console.log(p.name); // Arnaldo

console.log("name" in p.__proto__); // true
console.log("name" in Programmer.prototype); // true
console.log(Object.getOwnPropertyDescriptor(p.__proto__, "name").set); // [Function: set name]
console.log(Object.getOwnPropertyDescriptor(Programmer.prototype, "name").get); // [Function: get name]
console.log(Object.getOwnPropertyDescriptor(p, "_name_").value); // Arnaldo