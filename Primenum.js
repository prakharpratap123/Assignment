/* Prime numbers are numbers greater than 1. They only have two factors, 1 and the number itself. */
// let num = prompt("Enter a number: ");

// const numInput = document.getElementById("num-input");

// let num = 2;
// let isPrime = true;

// const checkPrime = () => {
//   let n = +numInput.value;
//   if (n === 1) console.log(`${n} is neither a prime nor a composite number. `);
//   else if (n > 1) {
//     for (let i = 2; i < n; i++) {
//       if (n % i === 0) {
//         isPrime = false;
//       }
//     }

//     if (isPrime) {
//       console.log(`${n} is a prime number.`);
//     } else {
//       console.log(`${n} is not a prime number.`);
//     }
//   } else {
//     console.log(`${n} is not a prime number.`);
//   }
// };


let n = +prompt('Enter a number : ');
let isPrime=true;
 

if(n===1){
  console.log(`${n} is neither a prime nor a composite number.`)
}
else if(n>1){
  for (let i = 2; i < n; i++) {
          if (n % i === 0) {
            isPrime = false;
          }
        }
    
        if (isPrime) {
          console.log(`${n} is a prime number.`);
        } else {
          console.log(`${n} is not a prime number.`);
        }
}
else{
console.log(`${n} is not a prime Number.`)
}