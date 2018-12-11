function myFunction({name = 'Eden', age = 23, profession = "Designer"} = {})  {
  console.log(name, age, profession); //Output “John 23 Designer”
}

myFunction({name: "John", age: 23});