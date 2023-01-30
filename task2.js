const nums = [8, 9, 3, 1, 5, 1, 9, 8];

let myFun = () => {
  return [...new Set(nums)];
};
console.log(myFun());
