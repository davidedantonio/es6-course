let x = {x: 12};
let y = {y: 13};
Object.setPrototypeOf(y, x)
console.log(y.x); //12
console.log(y.y); //13