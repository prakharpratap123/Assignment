/* Write a JavaScript program to swap two halves of a given array of integers of even length. */

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

let nLen = nums.length / 2;
let numArr = [];
for (let i = 0; i < nLen; i++) {
  numArr.push(nums[i + 4]);
  for (let j = nLen; j < nums.length; j++) {
    numArr.push(nums[j]);
  }
}
console.log(numArr);
