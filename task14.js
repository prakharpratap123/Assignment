let obj =
  '{"Emp" : "Mallikarjun" , "Address" : {"Line1" : "Marathalli" , "City" : "Bengaluru"}}';
let result = JSON.parse(obj);
console.log(result.Address);
