/* Make first letter of every words in upperCase */
const names = ["rahul", "ram", "sita", "gita"];
let arr = [];
for (let i = 0; i < names.length; i++) {
  let n = names[i].charAt(0).toUpperCase() + names[i].slice(1);
  //   let n = names[i][0].toUpperCase() + names[i].slice(1);
  arr.push(n);
}
console.log(arr);
