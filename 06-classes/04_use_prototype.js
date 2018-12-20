function Student(name) {
  this.name = name;
}

Student.prototype.printName = function() {
  console.log(this.name);
}

var s1 = new Student("Davide");
var s2 = new Student("Alvaro");

function School(name) {
  this.name = name;
  this.printName = function(){
    console.log(this.name);
  }
}

var s3 = new School("ABC");
var s4 = new School("XYZ");

console.log(s1.printName == s2.printName);
console.log(s3.printName == s4.printName);