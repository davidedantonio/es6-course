let x = {x: 12};
let y = {y: 13, __proto__: x};

let z = {z: 14, get b() {return 2;}, q: {}};
Object.defineProperty(z, "z", {enumerable: false});


let m = {};
Object.assign(m, y, z);

console.log(m.y);
console.log(m.z);
console.log(m.b);
console.log(m.x);
console.log(m.q == z.q);