let version1 = "1.01";
let version2 = "1.001";

// let version1 = "1.0";
// let version2 = "1.0.0";

// let version1 = "0.1";
// let version2 = "1.1";

let arr1 = version1.split("");
// console.log(arr1);

function myFun1(arr1) {
  return arr1 != 0;
}
let newArr1 = arr1.filter(myFun1);
// console.log(newArr1);
let str1 = newArr1.join("");
// console.log(str1);
version1 = +str1;
// console.log(version1);

let arr2 = version2.split("");
// console.log(arr2);

function myFun2(arr2) {
  return arr2 != 0;
}
let newArr2 = arr2.filter(myFun2);
// console.log(newArr2);
let str2 = newArr2.join("");
// console.log(str2);
version2 = +str2;
// console.log(version2);

if (version1 < version2) {
  console.log(-1);
} else if (version1 > version2) {
  console.log(1);
} else {
  console.log(0);
}
