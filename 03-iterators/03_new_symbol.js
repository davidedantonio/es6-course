try {
  let s = new Symbol(); //"TypeError" exception
} catch(e) {
  console.log(e.message); //Output "Symbol is not a constructor"
}