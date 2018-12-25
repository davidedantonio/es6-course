class Programmer {
  constructor(name) {
    this.name = name;
  }

  static findName(student) {
    return student.name;
  }
}

var s = new Programmer("Davide");
var name = Programmer.findName(s);

console.log(name); //Output "Davide"