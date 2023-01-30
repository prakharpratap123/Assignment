const nums = [1, 2, 3, 4, 5, 6];

let even = nums.filter((x) => x % 2 === 0);
console.log("Array of even numbers :-", even);

let odd = nums.filter((x) => x % 2 !== 0);
console.log("Array of odd numbers :-", odd);
