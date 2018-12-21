class Programmer {
  constructor(name) {
    this.name = name
  }
}

const p1 = new Programmer("Davide")
console.log(p1.name) // Output "Davide"


// The previous code is the same as this code when written using function
// function Programmer(name) {
//  this.name = name;
// }
// var s1 = new Programmer("Davide");
// console.log(s1.name); //Output "Davide"