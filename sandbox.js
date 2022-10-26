// explicit types
var character;
var age;
var isLoggedIn;
// character = 23
character = "Doe";
// age = "done"
age = 25;
// isLoggedIn = "asdf"
isLoggedIn = true;
// arrays
var ninjas;
var hokage = []; // need to add [] to use push method
// ninjas = [23, 40]
ninjas = ["John", "Doe"];
hokage.push("Recka hanabishi");
console.log(hokage);
// union types
var mixed = [];
mixed.push("John Doe");
mixed.push(28);
mixed.push(true);
var uid;
uid = "123";
uid = 123;
console.log(mixed);
// objects
var ninjaOne;
ninjaOne = { name: "yoshi", age: 30 };
var ninjaTwo;
ninjaTwo = {
    name: "john doe",
    age: 28,
    isBirthday: false
};
console.log(ninjaTwo);
