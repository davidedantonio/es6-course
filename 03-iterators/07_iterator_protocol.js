let obj = {
  array: [1, 2, 3, 4, 5],
  nextIndex: 0,
  next: function() {
    return this.nextIndex < this.array.length ?
    {value: this.array[this.nextIndex++], done: false} :
    {done: true};
  }
};

console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().done);