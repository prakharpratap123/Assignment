// const nums = [1, 2, 3, 1];
// //  const nums = [1,2,3,4];
// let newArray = [...new Set(nums)];

// if (nums.length !== newArray.length) {
//   console.log(true);
// } else {
//   console.log(false);
// }



// let arr=[1,2,3,4,2];
let arr=[1,2,3,4];


let newArr = new Array(...new Set(arr))

if(arr.length!=newArr.length){
  console.log(true)
}else{
  console.log(false)
}