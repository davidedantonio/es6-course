var obj = {
  __name__: "Davide"
};

Reflect.defineProperty(obj, "name", {
  get: function(){
    return this.__name__;
  }
});

console.log(obj.name); //Output "Davide"

var name = Reflect.get(obj, "name", {__name__: "Arnaldo"});
console.log(name); //Output "John"