function myFun(arr, ...valRemove) {
  filterArray = [];
  let myArr = [...valRemove];
  for (let j = 0; j < myArr.length; j++) {
    arr = arr.filter((x) => x !== myArr[j]);
  }
  filterArray = arr;
  //   console.log(myArr);
  console.log(filterArray);
}
// myFun([1,2,3,5,1,2,3],2,3)
myFun([1, 2, 3, 1, 2, 3], 2, 3);
