function checkPalindrome(string) {
    let len = string.length;
    for (let i = 0; i < len / 2; i++) {
      if (string[i] !== string[len - 1 - i]) {
        return "It is not a Palindrome.";
      }
    }
    return "It is a Palindrome.";
  }
  
  const string = prompt("Enter a string :");
  
  let value = checkPalindrome(string);
  console.log(value);