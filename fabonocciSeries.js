/* Fabonacci series : f(n) = f(n-1) + f(n-2), provided(given) f(0) = 0 ; f(1) = 1 */
let x = 0;
let y = 1;
let fn;
let n=7;
for(let i=0; i<n ; i++){
  console.log(`f(${i}) is : ${x}`);
     fn = x+y;
     x=y;
     y=fn
}
 console.log(` f(7)=f(6) + f(5) : ${x}`);