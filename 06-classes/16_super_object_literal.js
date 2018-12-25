var obj1 = {
  print(){
    console.log("Hello");
  }
}

var obj2 = {
  print(){
    super.print();
  }
}

Object.setPrototypeOf(obj2, obj1);
obj2.print(); //Output “Hello”