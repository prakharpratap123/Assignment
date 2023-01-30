/* Find those employes whose age is greater than 23 years */

let employee = [
  { firstName: "Subhendu", lastName: "Das", age: 25 },
  { firstName: "Pramod", lastName: "Krishna", age: 28 },
  { firstName: "Gaurav", lastName: "Kumar", age: 21 },
  { firstName: "Ashok", lastName: "Raj", age: 18 },
];

employee = employee.filter((x) => x.age > 23);
console.log(employee);
console.log("<--------------------------------------------->");
console.log(employee.map((x) => x.firstName));
console.log("<--------------------------------------------->");
for (let i = 0; i < employee.length; i++) {
  for (let [key, value] of Object.entries(employee[i])) {
    console.log(`${key} : ${value}`);
  }
}
