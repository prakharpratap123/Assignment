/* Method 1 */
function myFun(str, before, after) {
  str = str.replace(before, after);
  console.log(str);
}

myFun("I am a boy", "boy", "student");

/* Method 2 */
function myFun(str, before, after) {
  let arr = str.split(" ");
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == before) {
      arr[i] = after;
    }
  }
  str = arr.join(" ");
  console.log(str);
}

myFun("I am a boy", "boy", "sportsmen");

/*Method-3 One line answer as told by Subhendu Sir */
function myFun(str, before, after) {
  console.log(
    str
      .split(" ")
      .map((x) => (x === before ? (x = after) : x))
      .join(" ")
  );
}
myFun("I am a boy", "boy", "learner");
