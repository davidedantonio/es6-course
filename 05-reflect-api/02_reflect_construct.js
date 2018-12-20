function constructor1(a, b) {
  this.a = a;
  this.b = b;
  this.f = function() {
    return this.a + this.b + this.c;
  }
}

function constructor2(){}
constructor2.prototype.c = 100;

var myObject = Reflect.construct(constructor1, [1,2], constructor2);
console.log(myObject.f()); //Output "103"