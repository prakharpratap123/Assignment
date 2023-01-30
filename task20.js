const arr = [
  { name: "Prakhar", location: "Bangalore" },
  { name: "Rashad", location: "Hyderabad" },
  { name: "Rashad", location: "Hyderabad" },
  { name: "Rashad", location: "Hyderabad" },
  { name: "Rashad", location: "Patna" },
  { name: "Rashad", location: "Patna" },
  { name: "Rashad", location: "Patna" },
  { name: "Rashad", location: "Hyderabad" }
];

const input1 = "Patna"

// arr[1].location="Delhi"
// console.log(arr)
// console.log(arr[1].location)
console.log(
  arr.map(({ location , name}) =>
    location === input1 ? { name, location: "Delhi" } : { name, location }
  )
);
