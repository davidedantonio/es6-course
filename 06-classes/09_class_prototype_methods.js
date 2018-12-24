class Programmer {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printProfile() {
    console.log("Name is: " + this.name + " and Age is: " + this.age);
  }
}

var p = new Programmer("Davide", 35)
p.printProfile();

console.log("printProfile" in p.__proto__);
console.log("printProfile" in Programmer.prototype);

// The previous code is the same as this code when written using function

/* function Programmer(name, age) {
  this.name = name;
  this.age = age;
}
Programmer.prototype.printProfile = function() {
  console.log("Name is: " + this.name + " and Age is: " + this.age);
}

var p = new Programmer("Davide", 35)
p.printProfile();

console.log("printProfile" in p.__proto__);
console.log("printProfile" in Programmer.prototype); */