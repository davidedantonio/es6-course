let set = new Set("Hello!!!");

set.add(12); //add 12

console.log(set.has("!")); //check if value exists
console.log(set.size);

set.delete(12); //delete 12

console.log(...set);

set.clear(); //delete all values