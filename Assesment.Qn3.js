/* Method 1 (suggested by Nikhil which he got on google.) */
function myFun(str, count) {
  if (count > 1) {
    str = str.repeat(count);
    return str;
  } else {
    return str;
  }
}

console.log(myFun("Hello", 3));

/*My Method through logic */
function myFun(str, count) {
  if (count > 1) {
    let n = "";
    for (let i = 0; i < count; i++) {
      n += str;
    }
    str = n;
    console.log(str);
  } else {
    console.log(str);
  }
}
myFun("Hello", 6);
