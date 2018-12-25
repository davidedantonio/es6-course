function myConstructor() {
  console.log(new.target.name);
}

class myClass extends myConstructor {
  constructor() {
    super();
  }
}

var obj1 = new myClass(); // myClass
var obj2 = new myConstructor(); // myConstructor