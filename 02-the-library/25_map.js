let map = new Map();

let o = {n: 1};

map.set(o, "A"); //add
map.set("2", 9);

console.log(map.has("2")); //check if key exists

console.log(map.get(o)); //retrieve value associated with key

console.log(...map);

map.delete("2"); //delete key and associated value

map.clear(); //delete everything

//create a map from iterable object
let map_1 = new Map([[1, 2], [4, 5]]);

console.log(map_1.size); //number of keys