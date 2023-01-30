let version1 = "1.01";
let version2 = "1.001";

// let version1 = "1.0";
// let version2 = "1.0.0";

// let version1 = "0.1";
// let version2 = "1.1";

let arr1 = version1.split("");
// console.log(arr1);

let newArr1 = arr1.filter(x => x!=0);
// console.log(newArr1);
let str1 = newArr1.join("");
// console.log(str1);
version1 = +str1;
// console.log(version1);

let arr2 = version2.split("");
// console.log(arr2);


let newArr2 = arr2.filter(x => x!=0);
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


const num=[1,1,2,2,3,3,3,4];
console.log([...new Set(num)])
console.log(num.filter(x => x!==4 && x!==3))