/* Find sum of all digit present in a given String. */
let str = "Hello come in 5 seconds, i will give you 2 notes of 514 rupees";

let arr = str.split("");
let newArr = arr.filter((x) => !isNaN(+x)).filter((y) => y !== " ");
/*This (below method) too will work but in the array it will be conataining spaces.*/
//  let newArr = arr.filter((x) => !isNaN(+x));
console.log(newArr);
let sum = 0;
for (let i = 0; i < newArr.length; i++) {
  sum += +newArr[i];
}
console.log(sum);
