var s1 = "String";
var s2 = new String("String");

console.log(typeof s1); // Output "string"
console.log(typeof s2); // Output "object"
console.log(s1 == s2); // Output true
console.log(s1.length); // Output 6