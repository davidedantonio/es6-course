class myClass {
  static ["my" + "Method"](){
    console.log("Hello");
  }
}

myClass["my" + "Method"](); //Output "Hello"