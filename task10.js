let nums = [1, 2, 3, 4, 5, 6];

let myFun = (nums) => {
  let even = nums.filter((x) => x % 2 === 0);
  let odd = nums.filter((x) => x % 2 !== 0);
  console.log("even = ", even);
  console.log("odd = ", odd);
};
myFun(nums);
