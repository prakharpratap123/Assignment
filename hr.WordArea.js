const n = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 1, 1, 5, 5, 1, 5, 2, 5, 5, 5, 5, 5, 5,
];
const str = "letter";

/* Method 1 */
let maxHeight = -1;
for (let i = 0; i < str.length; i++) {
  const height = n[str.charCodeAt(i) - 97];
  if (height > maxHeight) maxHeight = height;
}
console.log(maxHeight * str.length);

/* Method 2 */
const arr = [];
for (let i = 0; i < str.length; i++) {
  const code = str.charCodeAt(i);
  arr.push(code - 97);
}
console.log(arr);
console.log(arr[0]);

for (let k = 0; k < arr.length; k++) {
  arr[k] = n[arr[k]];
}
console.log(arr);
console.log(Math.max(...arr) * arr.length);

/* Method 3 */
const r = [];
for (let x = 0; x < str.length; x++) {
  r.push(n[str.charCodeAt(x) - 97]);
}
// console.log(r)
console.log(Math.max(...r) * r.length);
