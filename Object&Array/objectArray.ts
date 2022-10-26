// Arrays
var Lakers = ['Lebron', 38, true];
Lakers.push('Forward');
Lakers.push(1.96);
console.log(Lakers);
// Objects
var user = {
    name: "John Doe",
    age: 30
};
// Typescript allow 
user.name = "Mat"; // 
user.age = 28;
// Typescript wiil not allow  object user.name will expect to return a string
user.name = 19;
console.log(user.name);
