var s = Symbol("Sample");

class myClass {
  static [s]() {
    console.log("Hello");
  }
}

myClass[s](); //Output "Hello"