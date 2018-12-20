function School(schoolName) {
  this.schoolName = schoolName;
}

School.prototype.printSchoolName = function() {
  console.log(this.schoolName);
}

function Student(studentName, schoolName) {
  this.studentName = studentName;
  School.call(this, schoolName);
}

Student.prototype = new School();
Student.prototype.printStudentName = function() {
  console.log(this.studentName);
}

var s = new Student("Davide", "ABC School");
s.printStudentName();
s.printSchoolName();