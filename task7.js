let string = "Hello World";
let array = string.split(" ");
let result = "";
for (let i = array.length - 1; i >= 0; i--) {
  result += array[i] +" ";
}
console.log(result);
