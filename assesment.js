let obj = {
    "name" : "MyName",
    "age" : 28,
    "Marks" : {
        "Maths" : 95,
        "English" : 81,
        "Hindi" : 95
    }

}

const {name, age, Marks} = obj;

for(let [key, value] of Object.entries(obj.Marks)){
    console.log(`${key} : ${value}`);
}