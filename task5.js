let n = 64;
// let n = 80;

function checkpower(x) {
  while (x) {
    if (x === 4) {
      return true;
    }
    if (x % 4 === 0) {
      x /= 4;
    } else {
      return false;
    }
  }
}

console.log(checkpower(n));
