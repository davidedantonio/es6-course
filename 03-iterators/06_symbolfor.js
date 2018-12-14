let obj = {};
(function(){
  let s1 = Symbol('name');
  obj[s1] = 'Eden';
})();

//obj[s1] cannot be accessed here
(function(){
  let s2 = Symbol.for('age');
  obj[s2] = 27;
})();

console.log(obj[Symbol.for('age')]); //Output "27"