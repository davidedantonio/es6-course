function myFunction([a, b, c = 3] = [1, 2, 3]) {
  console.log(a, b, c);  //Output “1 2 3”
}

myFunction(undefined);