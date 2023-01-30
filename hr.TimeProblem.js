// let s = "05:59:59PM";
let s = "12:01:00AM";
const Formatter24 = (s) => {
  if (s.includes("AM")) {
    if (s[0] + s[1] == "12") return "00" + s.substring(2, 8);
    return s.substring(0, 8);
  } else if (s.includes("PM")) {
    return (
      (s.startsWith("12") ? 0 : 12) + +s.substring(0, 2) + s.substring(2, 8)
    );
  }
};

console.log("Formatter24(s) :>> ", Formatter24(s));
