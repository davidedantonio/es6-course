var obj = {
  __name__: "Davide"
}

Reflect.defineProperty(obj, "name", {
  get: function(){
    return this.__name__;
  },
  set: function(newName){
    this.__name__ = newName;
  },
  configurable: true,
  enumerable: true
});

obj.name = "Arnaldo";
console.log(obj.name); //Output "Arnaldo"