function Student(name) {
  this.name = name;
}

Student.prototype.printName = function(){
  console.log(this.name);
}

var student1 = new Student("Davide");
var student2 = new Student("Arnaldo");

student1.printName(); //Output "Davide"
student2.printName(); //Output "Arnaldo"