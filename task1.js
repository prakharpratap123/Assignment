const nums = [8, 9, 3, 1, 5, 9,3,1];
let val = 9;
// myFun = (nums) => {
//     return nums != val;
// }
// console.log(nums.filter(myFun));

// function myFun(nums){
//     return nums !== val;
// }
// console.log(nums.filter(myFun));

let newArr = nums.filter((x) => x !== val && x!==1);
console.log(newArr);
console.log(new Array(...new Set (nums)))
let arr = new Array(...new Set (nums))
console.log(arr)