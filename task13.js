const obj = '{"StudentId" : "123" , "Marks" : [22,33,56,78,96]}';
let result = JSON.parse(obj);
console.log(result);
console.log(result.StudentId)
console.log(result.Marks)
